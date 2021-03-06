import {
  GET_PHASES_REQUEST, GET_PHASES_SUCCESS, GET_PHASES_FAILURE, GET_WEEKS_REQUEST, GET_WEEKS_SUCCESS, GET_WEEKS_FAILURE, GET_DAYS_REQUEST,
  GET_DAYS_SUCCESS, GET_DAYS_FAILURE, STATUS_REQUEST, STATUS_SUCCESS, STATUS_FAILURE, CHOOSE_PHASE, CHOOSE_WEEK, CHOOSE_DAY,
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, CREATEUSER_REQUEST, CREATEUSER_SUCCESS, CREATEUSER_FAILURE, GET_DAY_REQUEST, GET_DAY_SUCCESS,
  GET_DAY_FAILURE, GETALLDAYS_REQUEST, GETALLDAYS_SUCCESS, GETALLDAYS_FAILURE, LOGIN_MODAL_FLAG_ON, LOGIN_MODAL_FLAG_OFF, NEWUSER_MODAL_FLAG_ON,
  NEWUSER_MODAL_FLAG_OFF, CLEAR_MESSAGE, ADD_MATERIALS_MODAL_FLAG_ON, ADD_MATERIALS_MODAL_FLAG_OFF, UPLOADING_REQUEST, UPLOADING_SUCCESS, UPLOADING_FAILURE,
  CLEAR_UPLOAD_MESSAGE, SEARCH_FLAG, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, CLEAR_DELETE_MESSAGE,
  GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE,
} from './actionTypes';

export const getPhasesRequest = () => ({ type: GET_PHASES_REQUEST });
export const getPhasesSuccess = (name) => ({ type: GET_PHASES_SUCCESS, payload: { name } });
export const getPhasesFailure = (error) => ({ type: GET_PHASES_FAILURE, payload: { error } });

export const getWeeksRequest = () => ({ type: GET_WEEKS_REQUEST });
export const getWeeksSuccess = (name) => ({ type: GET_WEEKS_SUCCESS, payload: { name } });
export const getWeeksFailure = (error) => ({ type: GET_WEEKS_FAILURE, payload: { error } });

export const getDaysRequest = () => ({ type: GET_DAYS_REQUEST });
export const getDaysSuccess = (name) => ({ type: GET_DAYS_SUCCESS, payload: { name } });
export const getDaysFailure = (error) => ({ type: GET_DAYS_FAILURE, payload: { error } });

export const getDayRequest = () => ({ type: GET_DAY_REQUEST });
export const getDaySuccess = (day) => ({ type: GET_DAY_SUCCESS, payload: day });
export const getDayFailure = (error) => ({ type: GET_DAY_FAILURE, payload: { error } });

export const statusRequest = () => ({ type: STATUS_REQUEST, payload: { message: 'Checking user\'s status...' } });
export const statusSucceeded = (status, message) => ({ type: STATUS_SUCCESS, payload: { status, message } });
export const statusFailed = (message) => ({ type: STATUS_FAILURE, payload: { message } });

export const choosePhase = (id) => ({ type: CHOOSE_PHASE, payload: { id } });
export const chooseWeek = (id) => ({ type: CHOOSE_WEEK, payload: { id } });
export const chooseDay = (id) => ({ type: CHOOSE_DAY, payload: { id } });

export const logoutRequest = () => ({ type: LOGOUT_REQUEST, message: 'Checking...' });
export const logoutRequestSuccessed = (message) => ({ type: LOGOUT_SUCCESS, payload: { status: '', message, errorMessage: '', } });
export const logoutRequestFailed = (errorMessage) => ({ type: LOGOUT_FAILURE, payload: { status: '', message: '', errorMessage, } });

export const createUserRequest = () => ({ type: CREATEUSER_REQUEST, payload: { message: 'Creating user...' } });
export const createUserSucceeded = (message, newUser) => ({ type: CREATEUSER_SUCCESS, payload: { message, newUser } });
export const createUserFailed = (message) => ({ type: CREATEUSER_FAILURE, payload: { message, } });

export const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST, payload: { message: 'Deleting user...', } });
export const deleteUserSucceeded = (message, id) => ({ type: DELETE_USER_SUCCESS, payload: { message, id } });
export const deleteUserFailed = (message) => ({ type: DELETE_USER_FAILURE, payload: { message, } });
export const clearDeleteMessages = () => ({ type: CLEAR_DELETE_MESSAGE });

export const getAllDaysRequest = () => ({ type: GETALLDAYS_REQUEST });
export const getAllDaysSuccess = (days) => ({ type: GETALLDAYS_SUCCESS, payload: { days } });
export const getAllDaysFailure = () => ({ type: GETALLDAYS_FAILURE });

export const searchFlag = (flag) => ({ type: SEARCH_FLAG, payload: { flag } });

export const loginModalOn = () => ({ type: LOGIN_MODAL_FLAG_ON });
export const loginModalOff = () => ({ type: LOGIN_MODAL_FLAG_OFF });

export const newUserModalOn = () => ({ type: NEWUSER_MODAL_FLAG_ON });
export const newUserModalOff = () => ({ type: NEWUSER_MODAL_FLAG_OFF });

export const addMaterialsModalOn = () => ({ type: ADD_MATERIALS_MODAL_FLAG_ON });
export const addMaterialsModalOff = () => ({ type: ADD_MATERIALS_MODAL_FLAG_OFF });

export const clearMessages = () => ({ type: CLEAR_MESSAGE });

export const uploadingMaterialStarts = () => ({ type: UPLOADING_REQUEST });
export const uploadingMaterialSuceeded = (message) => ({ type: UPLOADING_SUCCESS, message });
export const uploadingMaterialFailed = (errorMessage) => ({ type: UPLOADING_FAILURE, errorMessage });
export const clearUploadMessages = () => ({ type: CLEAR_UPLOAD_MESSAGE });

export const getAllUsersRequest = () => ({ type: GET_ALL_USERS_REQUEST });
export const getAllUsersRequestSuceeded = (users, message) => ({ type: GET_ALL_USERS_SUCCESS, payload: { users, message } });
export const getAllUsersRequestFailed = (errorMessage) => ({ type: GET_ALL_USERS_FAILURE, payload: { errorMessage } });


// export function getPhasesRequest() {
//   return {
//     type: GET_PHASES_REQUEST,
//   }
// }
// export function getPhasesSuccess(name) {
//   return {
//     type: GET_PHASES_SUCCESS,
//     payload: {
//       name
//     }
//   }
// }
// export function getPhasesFailure(error) {
//   return {
//     type: GET_PHASES_FAILURE,
//     payload: {
//       error
//     }
//   }
// }

// export function getWeeksRequest() {
//   return {
//     type: GET_WEEKS_REQUEST,
//   }
// }
// export function getWeeksSuccess(name) {
//   return {
//     type: GET_WEEKS_SUCCESS,
//     payload: {
//       name,
//     }
//   }
// }
// export function getWeeksFailure(error) {
//   return {
//     type: GET_WEEKS_FAILURE,
//     payload: {
//       error
//     }
//   }
// }

// export function getDaysRequest() {
//   return {
//     type: GET_DAYS_REQUEST,
//   }
// }
// export function getDaysSuccess(name) {
//   return {
//     type: GET_DAYS_SUCCESS,
//     payload: {
//       name,
//     }
//   }
// }
// export function getDaysFailure(error) {
//   return {
//     type: GET_DAYS_FAILURE,
//     payload: {
//       error
//     }
//   }
// }
// export function getDayRequest() {
//   return {
//     type: GET_DAY_REQUEST,
//   }
// }
// export function getDaySuccess(day) {
//   return {
//     type: GET_DAY_SUCCESS,
//     payload: day
//   }
// }
// export function getDayFailure(error) {
//   return {
//     type: GET_DAY_FAILURE,
//     payload: {
//       error
//     }
//   }
// }

// export function statusRequest() {
//   return {
//     type: STATUS_REQUEST,
//     payload: {
//       message: 'Checking user\'s status...',
//     }
//   }
// }
// export const statusSucceeded = (status, message) => ({ type: STATUS_SUCCESS, payload: { status, message } })
// export function statusFailed(message) {
//   return {
//     type: STATUS_FAILURE,
//     payload: {
//       message,
//     }
//   }
// }
// export function choosePhase(id) {
//   return {
//     type: CHOOSE_PHASE,
//     payload: {
//       id
//     }
//   }
// }
// export function chooseWeek(id) {
//   return {
//     type: CHOOSE_WEEK,
//     payload: {
//       id
//     }
//   }
// }
// export function chooseDay(id) {
//   return {
//     type: CHOOSE_DAY,
//     payload: {
//       id
//     }
//   }
// }
// export function logoutRequest() {
//   return {
//     type: LOGOUT_REQUEST,
//     message: 'Checking...'
//   }
// }
// export function logoutRequestSuccessed(message) {
//   return {
//     type: LOGOUT_SUCCESS,
//     payload: {
//       status: '',
//       message,
//       errorMessage: '',
//     }
//   }
// }
// export function logoutRequestFailed(errorMessage) {
//   return {
//     type: LOGOUT_FAILURE,
//     payload: {
//       errorMessage,
//       message: '',
//       status: '',
//     },

//   }
// }
// export function createUserRequest() {
//   return {
//     type: CREATEUSER_REQUEST,
//     payload: {
//       message: 'Creating user...',
//     }
//   }
// }

// export const createUserSucceeded = (message, newUser) => ({ type: CREATEUSER_SUCCESS, payload: { message, newUser } })
// export const createUserFailed = (message) => ({ type: CREATEUSER_FAILURE, payload: { message, } })

// export const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST, payload: { message: 'Deleting user...', } })
// export const deleteUserSucceeded = (message, id) => ({ type: DELETE_USER_SUCCESS, payload: { message, id } })
// export const deleteUserFailed = (message) => ({ type: DELETE_USER_FAILURE, payload: { message, } })
// export const clearDeleteMessages = () => ({ type: CLEAR_DELETE_MESSAGE })

// export function getAllDaysRequest() {
//   return {
//     type: GETALLDAYS_REQUEST,
//   }
// }
// export function getAllDaysSuccess(days) {
//   return {
//     type: GETALLDAYS_SUCCESS,
//     payload: {
//       days
//     }
//   }
// }
// export function getAllDaysFailure() {
//   return {
//     type: GETALLDAYS_FAILURE,
//   }
// }

// export function searchFlag(flag) {
//   return {
//     type: SEARCH_FLAG,
//     payload: {
//       flag
//     }
//   }
// }
// export const loginModalOn = () => ({ type: LOGIN_MODAL_FLAG_ON })
// export const loginModalOff = () => ({ type: LOGIN_MODAL_FLAG_OFF })
// export const newUserModalOn = () => ({ type: NEWUSER_MODAL_FLAG_ON })
// export const newUserModalOff = () => ({ type: NEWUSER_MODAL_FLAG_OFF })
// export const addMaterialsModalOn = () => ({ type: ADD_MATERIALS_MODAL_FLAG_ON })
// export const addMaterialsModalOff = () => ({ type: ADD_MATERIALS_MODAL_FLAG_OFF })
// export const clearMessages = () => ({ type: CLEAR_MESSAGE })

// export const clearUploadMessages = () => ({ type: CLEAR_UPLOAD_MESSAGE })
// export const uploadingMaterialStarts = () => ({ type: UPLOADING_REQUEST })
// export const uploadingMaterialSuceeded = (message) => ({ type: UPLOADING_SUCCESS, message })
// export const uploadingMaterialFailed = (errorMessage) => ({ type: UPLOADING_FAILURE, errorMessage })

// export const getAllUsersRequest = () => ({ type: GET_ALL_USERS_REQUEST })
// export const getAllUsersRequestSuceeded = (users, message) => ({ type: GET_ALL_USERS_SUCCESS, payload: { users, message } })
// export const getAllUsersRequestFailed = (errorMessage) => ({ type: GET_ALL_USERS_FAILURE, payload: { errorMessage } })
