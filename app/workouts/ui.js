
const store = require('../store.js')

const workoutsArray = []

const onNewWorkoutSuccess = function (response) {
  $('#workout-display').html('<p>Workout Logged!</p>')
  $('form').trigger('reset')
  const workouts = response.workouts
  console.log(workouts)
  store.workouts = response.workouts
  workoutsArray.push(store.workouts)
  console.log(workoutsArray)
}

const onNewWorkoutFailure = function () {
  $('#workout-display').html('<p>Fail</p>')

  $('form').trigger('reset')
}

const onIndexWorkoutsSuccess = function (response) {
  $('#all-workouts').show()
  const workouts = response.workouts
  console.log(response)
  // console.log(workoutsArray)

  // eslint-disable-next-line no-unused-vars
  let workoutsHtml = ''

  workouts.forEach(workouts => {
    // const workoutsIndex = workoutsArray.indexOf(workouts)

    // // const gameWinner = resultsArray[gameIndex]
    // console.log(workoutsIndex)

    workoutsHtml += `
                      <div>
                        <ul>
                        <li>
                        <div> Workout Type: ${workouts.type}</div>
                        <div> Date: ${workouts.date}</div>
                        <div> Time: ${workouts.duration} </div>
                        </li> 
                        </ul>
                        </div>
                    `
  })

  $('#index-workouts').html(workoutsHtml)
}

const onShowWorkoutSuccess = function (response) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(response)

  const workoutHtml = `<div>
                        <ul>
                        <li>
                        <div> Workout Type: ${response.workout.type}</div>
                        <div> Date: ${response.workout.date}</div>
                        <div> Time: ${response.workout.duration} </div>
                        </li> 
                        </ul>
                        
                        </div>
                    `

  // replace whatever was in the books-display element with our bookHtml
  $('#find-workout').html(workoutHtml)

  // reset all forms
  $('form').trigger('reset')
}

export default {
  onNewWorkoutSuccess,
  onNewWorkoutFailure,
  onIndexWorkoutsSuccess,
  onShowWorkoutSuccess
}
