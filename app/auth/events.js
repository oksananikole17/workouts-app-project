'use strict'

const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const authUi = require('./ui.js').default

const onSignUp = function (event) {
  event.preventDefault()
  console.log('now here')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('now')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  // api call
  authApi
    .signIn(data)
    .then((response) => authUi.onSignInSuccess(response))
    .catch(() => authUi.onSignInFailure())
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('yuh')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  // api call
  authApi
    .changePassword(data)
    .then(() => authUi.onChangePasswordSuccess())
    .catch(() => authUi.onChangePasswordFailure())
}
const onSignOut = function () {
  authApi.signOut().then(() => authUi.onSignOutSuccess())
  // .catch(() => authUi.onChangePasswordFailure())
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
