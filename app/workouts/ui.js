
const store = require('../store.js')

const onNewWorkoutSuccess = function (response) {
  $('#workout-display').html('<p>Workout Logged!</p>')
  $('form').trigger('reset')
  console.log(response)
  store.workouts = response.workouts

  return true
}

const onNewWorkoutFailure = function () {
  $('#workout-display').html('<p>Fail</p>')

  $('form').trigger('reset')
}

export default {
  onNewWorkoutSuccess,
  onNewWorkoutFailure
}
