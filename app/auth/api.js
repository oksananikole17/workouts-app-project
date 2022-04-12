'use strict'

// const store = require('../store.js')
const config = require('./../config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
    // same as data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
    // same as data: data
  })
}

module.exports = {
  signUp,
  signIn
}
