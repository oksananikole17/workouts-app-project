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

const onDynamicUpdateWorkout = function (event) {
  event.preventDefault()

  const updateForm = event.target
  console.log(updateForm)

  const id = $(updateForm).data('id')
  console.log(id)

  // create a javascript object from the form where the user entered the book
  // information
  const data = getFormFields(event.target)
  console.log(data)

  // make API call to update one book with the data we grabbed from the form
  workoutsApi
    .updateWorkout(id, data).then(workoutsUi.onUpdateWorkoutSuccess(id, data))
}

const onDynamicDestroyWorkout = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target

  const id = $(deleteButton).data('id')

  // make API call for deleting one book with the data we grabbed from the form
  workoutsApi.destroyWorkout(id).then(workoutsUi.onDestroyWorkoutSuccess(id))
}
module.exports = {
  onNewWorkout,
  onIndexWorkouts,
  onShowWorkout,
  onDynamicUpdateWorkout,
  onDynamicDestroyWorkout
}
