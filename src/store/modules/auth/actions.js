export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function signInSuccess(token, users) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, users},
  };
}

export function signUpRequest(email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {email, password},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
