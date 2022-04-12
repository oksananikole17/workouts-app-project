'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const workoutsApi = require('./api.js')
const workoutsUi = require('./ui.js').default

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

module.exports = {
  onNewWorkout
}
