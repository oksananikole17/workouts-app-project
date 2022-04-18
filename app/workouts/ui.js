
const store = require('../store.js')

const workoutsArray = []

const onNewWorkoutSuccess = function (response) {
  $('#workout-display').html('<p>Workout Logged!</p>')
  $('form').trigger('reset')
  const workouts = response.workouts
  console.log(workouts)
  const element = document.getElementById('index-workouts')
  console.log(element)

  const workoutHtml = `
                      <div id=${workouts._id}>
                        <ul>
                        <li>
                        <div> Workout Type: ${workouts.type}</div>
                        <div> Date: ${workouts.date}</div>
                        <div> Time: ${workouts.duration} </div>
                        </li> 
                        </ul>
                        <form class="workouts-update-dynamic" data-id=${workouts._id}>
        <input type="text" name="workouts[type]" placeholder="Workout Type Here" required>
        <input type="text" name="workouts[date]" placeholder="Workout Date Here" required>
        <input type="text" name="workouts[duration]" placeholder="Workout Time Here" required>
        <button class="wrk-update-btn" type="submit">Update Workout</button>
      </form>
      <button class="workouts-destroy-dynamic" data-id=${workouts._id}>Delete Workout</button>
                        </div>
                    `

  element.innerHTML += workoutHtml

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
    workoutsHtml += `
                      <div id=${workouts._id}>
                        <ul>
                        <li>
                        <div> Workout Type: ${workouts.type}</div>
                        <div> Date: ${workouts.date}</div>
                        <div> Time: ${workouts.duration} </div>
                        </li> 
                        </ul>
                        <form class="workouts-update-dynamic" data-id=${workouts._id}>
        <input type="text" name="workouts[type]" placeholder="Workout Type Here" required>
        <input type="text" name="workouts[date]" placeholder="Workout Date Here" required>
        <input type="text" name="workouts[duration]" placeholder="Workout Time Here" required>
        <button class="wrk-update-btn" type="submit">Update Workout</button>
      </form>
      <button class="workouts-destroy-dynamic" data-id=${workouts._id}>Delete Workout</button>
                        </div>
                    `
  })

  $('#index-workouts').html(workoutsHtml)
}

const onShowWorkoutSuccess = function (response) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(response)
  console.log('butt')
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

const onUpdateWorkoutSuccess = function (id, data) {
  console.log(data)
  console.log(id)
  const element = document.getElementById(id)
  console.log(element)

  const workoutHtml = `
                      <div id=${id}>
                        <ul>
                        <li>
                        <div> Workout Type: ${data.workouts.type}</div>
                        <div> Date: ${data.workouts.date}</div>
                        <div> Time: ${data.workouts.duration} </div>
                        </li> 
                        </ul>
                        <form class="workouts-update-dynamic" data-id=${id}>
        <input type="text" name="workouts[type]" placeholder="Workout Type Here" required>
        <input type="text" name="workouts[date]" placeholder="Workout Date Here" required>
        <input type="text" name="workouts[duration]" placeholder="Workout Time Here" required>
        <button class="wrk-update-btn" type="submit">Update Workout</button>
      </form>
      <button class="workouts-destroy-dynamic" data-id=${id}>Delete Workout</button>
                        </div>
                    `

  element.innerHTML = workoutHtml

  $('#workout-update-success').html('You successfully updated the workout!')

  // add class for success messaging
  $('#workout-update-success').addClass('success')

  // use setTimeout to allow the success message o stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#workout-update-success').html('')
    $('#workout-update-success').removeClass('success')
  }, 6000)

  // reset all forms
  $('form').trigger('reset')
}

const onDestroyWorkoutSuccess = function (id) {
  console.log(id)
  const element = document.getElementById(id)
  console.log(element)
  element.parentNode.removeChild(element)

  $('#workout-update-success').html('Workout deleted!')

  $('#workout-update-success').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#workout-update-success').html('')
    $('#workout-update-success').removeClass('success')
  }, 6000)

  // reset all forms
  $('form').trigger('reset')
}
export default {
  onNewWorkoutSuccess,
  onNewWorkoutFailure,
  onIndexWorkoutsSuccess,
  onShowWorkoutSuccess,
  onUpdateWorkoutSuccess,
  onDestroyWorkoutSuccess
}
