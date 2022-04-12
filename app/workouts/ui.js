
const store = require('../store.js')

const workoutsArray = []

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

const onIndexWorkoutsSuccess = function () {
  $('#all-workouts').show()
  // console.log(workoutsArray)

  // eslint-disable-next-line no-unused-vars
  let workoutsHtml = ''

  workoutsArray.forEach((workouts) => {
    const workoutsIndex = workoutsArray.indexOf(workouts)

    // const gameWinner = resultsArray[gameIndex]
    console.log(workoutsIndex)

    workoutsHtml += `
                      <div>
                        <ul>
                        <li>
                        <div> Workout Type: ${store.workouts.type}</div>
                        <div> Date: ${store.workouts.date}</div>
                        <div> Player ${store.workouts.duration} </div>
                        </li> 
                        </ul>
                        
                        </div>
                    `
  })
}

export default {
  onNewWorkoutSuccess,
  onNewWorkoutFailure,
  onIndexWorkoutsSuccess
}
