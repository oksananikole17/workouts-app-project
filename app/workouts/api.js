'use strict'

const store = require('../store.js')
const config = require('./../config')

const newWorkout = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/workouts',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data

  })
}

const indexWorkouts = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/workouts',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showWorkout = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/workouts/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateWorkout = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/workouts/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const destroyWorkout = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/workouts/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newWorkout,
  indexWorkouts,
  showWorkout,
  updateWorkout,
  destroyWorkout

}
