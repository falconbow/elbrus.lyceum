import {
  GET_PHASES_SUCCESS, GET_PHASES_FAILURE, GET_PHASES_REQUEST, GET_WEEKS_SUCCESS, GET_WEEKS_FAILURE, GET_WEEKS_REQUEST,
  GET_DAYS_SUCCESS, GET_DAYS_FAILURE, GET_DAYS_REQUEST, CHOOSE_PHASE, CHOOSE_WEEK, CHOOSE_DAY,
  GET_DAY_SUCCESS, GET_DAY_FAILURE, GET_DAY_REQUEST, GETALLDAYS_REQUEST, GETALLDAYS_SUCCESS, SEARCH_FLAG
} from "../actionTypes";

const initialState = {
  data:
  {
    phases: [],
    weeks: [],
    days: [],
    day: {},
    allDays: [],
  },
  loading: false,
  phase: '',
  week: '',
  day: '',
  flag: false,
  singleDay: {},
};

export default function ViewInfo(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_PHASES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_PHASES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, phases: payload.name },
      }
    case GET_PHASES_FAILURE:
      return {
        ...state,
        loading: false
      }
    case GET_WEEKS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_WEEKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, weeks: payload.name },
      }
    case GET_WEEKS_FAILURE:
      return {
        ...state,
        loading: false
      }
    case GET_DAYS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_DAYS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, days: payload.name },
      }
    case GET_DAYS_FAILURE:
      return {
        ...state,
        loading: false
      }
    case GET_DAY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, day: payload.name },
        singleDay: payload
      }
    case GET_DAY_FAILURE:
      return {
        ...state,
        loading: false
      }
    case CHOOSE_PHASE:
      return {
        ...state,
        phase: payload.id
      }
    case CHOOSE_WEEK:
      return {
        ...state,
        week: payload.id
      }
    case CHOOSE_DAY:
      return {
        ...state,
        day: payload.id
      }

    case GETALLDAYS_REQUEST:
      return {
        ...state
      }
    case GETALLDAYS_SUCCESS:
      return {
        ...state,
        data: { ...state.data, allDays: payload.days },
      }
    case SEARCH_FLAG:
      return {
        ...state,
        flag: payload.flag
      }
    default:
      return state
  }
};

// import {
//   GET_PHASES_REQUEST,
//   GET_PHASES_SUCCESS,
//   GET_PHASES_FAILURE,
//   GET_WEEKS_REQUEST,
//   GET_WEEKS_SUCCESS,
//   GET_WEEKS_FAILURE,
//   GET_DAYS_REQUEST,
//   GET_DAYS_SUCCESS,
//   GET_DAYS_FAILURE,
//   GET_DAY_REQUEST,
//   GET_DAY_SUCCESS,
//   GET_DAY_FAILURE,
//   STATUS_REQUEST,
//   STATUS_SUCCESS,
//   STATUS_FAILURE,
//   CHOOSE_PHASE,
//   CHOOSE_WEEK,
//   CHOOSE_DAY,
//   LOGOUT_REQUEST,
//   LOGOUT_SUCCESS,
//   LOGOUT_FAILURE,
//   CREATEUSER_REQUEST,
//   CREATEUSER_SUCCESS,
//   CREATEUSER_FAILURE,
// } from "../actionTypes"

// const initialState = { data: { phases: [], weeks: [], days: [], day: {} }, loading: false, phase: '', week: '', day: '', singleDay: {}, userStatus: '' }



// export default function ViewInfo(state = initialState, action) {
//   const { type, payload } = action
//   switch (type) {
//     case GET_PHASES_REQUEST:
//       return {
//         ...state,
//         loading: true
//       }
//     case GET_PHASES_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: { ...state.data, phases: payload.name },
//       }
//     case GET_PHASES_FAILURE:
//       return {
//         ...state,
//         loading: false
//       }
//     case GET_WEEKS_REQUEST:
//       return {
//         ...state,
//         loading: true
//       }
//     case GET_WEEKS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: { ...state.data, weeks: payload.name },
//       }
//     case GET_WEEKS_FAILURE:
//       return {
//         ...state,
//         loading: false
//       }
//     case GET_DAYS_REQUEST:
//       return {
//         ...state,
//         loading: true
//       }
//     case GET_DAYS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: { ...state.data, days: payload.name },
//       }
//     case GET_DAYS_FAILURE:
//       return {
//         ...state,
//         loading: false
//       }
//     case GET_DAY_REQUEST:
//       return {
//         ...state,
//         loading: true
//       }
//     case GET_DAY_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: { ...state.data, day: payload.name },
//         singleDay: payload
//       }
//     case GET_DAY_FAILURE:
//       return {
//         ...state,
//         loading: false
//       }

//     case STATUS_REQUEST:
//       return {
//         ...state,
//         message: payload.message,
//         errorMessage: '',
//       }
//     case STATUS_SUCCESS:
//       return {
//         ...state,
//         message: payload.message,
//         errorMessage: '',
//       }
//     case STATUS_SUCCESS:
//       return {
//         ...state,
//         userStatus: payload.status,
//         message: payload.message,
//         errorMessage: '',
//       }
//     case STATUS_FAILURE:
//       return {
//         ...state,
//         errorMessage: payload.message,
//       }
//     case CHOOSE_PHASE:
//       return {
//         ...state,
//         phase: payload.id
//       }
//     case CHOOSE_WEEK:
//       return {
//         ...state,
//         week: payload.id
//       }
//     case CHOOSE_DAY:
//       return {
//         ...state,
//         day: payload.id
//       }
//     case LOGOUT_REQUEST:
//       return {
//         ...state,
//         message: 'Checking LOGOUT_REQUEST',
//         errorMessage: '',
//       }
//     case LOGOUT_SUCCESS:
//       return {
//         ...state,
//         userStatus: '',
//         message: payload.message,
//         errorMessage: '',
//       }
//     case LOGOUT_FAILURE:
//       return {
//         ...state,
//         errorMessage: payload.errorMessage,
//         message: '',
//       }
//     case CREATEUSER_REQUEST:
//       return {
//         ...state,
//         message: payload.message,
//         errorMessage: '',
//       }
//     case CREATEUSER_SUCCESS:
//       return {
//         ...state,
//         message: payload.message,
//         errorMessage: '',
//       }
//     case CREATEUSER_FAILURE:
//       return {
//         ...state,
//         errorMessage: payload.message,
//         message: ''
//       }
//     default:
//       return state
//   }
// }
