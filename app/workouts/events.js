'use strict'

const workoutsApi = require('./api.js')
const workoutsUi = require('./ui.js').default
const getFormFields = require('../../lib/get-form-fields.js')

const onNewWorkout = function (event) {
  event.preventDefault()
  console.log('pls')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  workoutsApi
    .newWorkout(data)
    .then((response) => workoutsUi.onNewWorkoutSuccess(response))
    .catch(() => workoutsUi.onNewWorkoutFailure())
}

const onIndexWorkouts = function (event) {
  event.preventDefault()
  console.log('i am dying')

  // api call
  workoutsApi
    .indexWorkouts().then(workoutsUi.onIndexWorkoutsSuccess)
}

const onShowWorkout = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // create a javascript object from the form (event.target) where the user entered the book id
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  // make API call for getting one book with the id of the book we grabbed from the form
  workoutsApi
    .showWorkout(data.workouts.id).then(workoutsUi.onShowWorkoutSuccess)
}

module.exports = {
  onNewWorkout,
  onIndexWorkouts,
  onShowWorkout
}
