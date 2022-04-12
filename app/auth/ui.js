'use strict'

const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display').html('<p>Account Created!</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Fail</p>')
}

const onSignInSuccess = function (response) {
  $('#workout-home').show()
  $('form').trigger('reset')
  $('#sign-out').show()
  console.log(response)
  store.user = response.user

  return true
}

const onSignInFailure = function () {
  $('#sign-display').html('<p>Fail</p>')

  $('form').trigger('reset')
}

export default {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure
}
