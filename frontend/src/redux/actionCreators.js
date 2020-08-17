import {
  GET_PHASES_REQUEST, GET_PHASES_SUCCESS, GET_PHASES_FAILURE,
  GET_WEEKS_REQUEST, GET_WEEKS_SUCCESS, GET_WEEKS_FAILURE,
<<<<<<< HEAD
  GET_DAYS_REQUEST, GET_DAYS_SUCCESS, GET_DAYS_FAILURE, STATUS_REQUEST, STATUS_SUCCESS, STATUS_FAILURE,
  CHOOSE_PHASE, CHOOSE_WEEK, CHOOSE_DAY, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, CREATEUSER_REQUEST, CREATEUSER_SUCCESS, CREATEUSER_FAILURE,
=======
  GET_DAYS_REQUEST, GET_DAYS_SUCCESS, GET_DAYS_FAILURE,
  GET_DAY_REQUEST, GET_DAY_SUCCESS, GET_DAY_FAILURE,
  STATUS_REQUEST,
  STATUS_SUCCESS,
  STATUS_FAILURE,
  CHOOSE_PHASE, CHOOSE_WEEK, CHOOSE_DAY,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
>>>>>>> 1733e6f09689b8354dbfc2f13e36da947f3764c3
} from './actionTypes'

export function getPhasesRequest() {
  return {
    type: GET_PHASES_REQUEST,
  }
}
export function getPhasesSuccess(name) {
  return {
    type: GET_PHASES_SUCCESS,
    payload: {
      name
    }
  }
}
export function getPhasesFailure(error) {
  return {
    type: GET_PHASES_FAILURE,
    payload: {
      error
    }
  }
}

export function getWeeksRequest() {
  return {
    type: GET_WEEKS_REQUEST,
  }
}
export function getWeeksSuccess(name) {
  return {
    type: GET_WEEKS_SUCCESS,
    payload: {
      name,
    }
  }
}
export function getWeeksFailure(error) {
  return {
    type: GET_WEEKS_FAILURE,
    payload: {
      error
    }
  }
}

export function getDaysRequest() {
  return {
    type: GET_DAYS_REQUEST,
  }
}
export function getDaysSuccess(name) {
  return {
    type: GET_DAYS_SUCCESS,
    payload: {
      name,
    }
  }
}
export function getDaysFailure(error) {
  return {
    type: GET_DAYS_FAILURE,
    payload: {
      error
    }
  }
}
export function getDayRequest() {
  return {
    type: GET_DAY_REQUEST,
  }
}
export function getDaySuccess(day) {
  return {
    type: GET_DAY_SUCCESS,
    payload: day
  }
}
export function getDayFailure(error) {
  return {
    type: GET_DAY_FAILURE,
    payload: {
      error
    }
  }
}

export function statusRequest() {
  return {
    type: STATUS_REQUEST,
    payload: {
      message: 'Checking user\'s status...',
    }
  }
}
export function statusSucceeded(status, message) {
  return {
    type: STATUS_SUCCESS,
    payload: {
      status,
      message,
    }
  }
}
export function statusFailed(message) {
  return {
    type: STATUS_FAILURE,
    payload: {
      message,
    }
  }
}
export function choosePhase(id) {
  return {
    type: CHOOSE_PHASE,
    payload: {
      id
    }
  }
}
export function chooseWeek(id) {
  return {
    type: CHOOSE_WEEK,
    payload: {
      id
    }
  }
}
export function chooseDay(id) {
  return {
    type: CHOOSE_DAY,
    payload: {
      id
    }
  }
}
export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
    message: 'Checking...'
  }
}
export function logoutRequestSuccessed(message) {
  return {
    type: LOGOUT_SUCCESS,
    payload: {
      status: '',
      message,
      errorMessage: '',
    }
  }
}
export function logoutRequestFailed(errorMessage) {
  return {
    type: LOGOUT_FAILURE,
    payload: {
      errorMessage,
      message: '',
    },

  }
}
export function createUserRequest() {
  return {
    type: CREATEUSER_REQUEST,
    payload: {
      message: 'Creating user...',
    }
  }
}
export function createUserSucceeded(message) {
  return {
    type: CREATEUSER_SUCCESS,
    payload: {
      message,
    }
  }
}
export function createUserFailed(message) {
  return {
    type: CREATEUSER_FAILURE,
    payload: {
      message,
    }
  }
}
