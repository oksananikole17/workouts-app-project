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
    // same as data: data
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

module.exports = {
  newWorkout,
  indexWorkouts

}
