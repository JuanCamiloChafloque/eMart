import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  CLEAR_ERRORS,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_RESET,
} from "../constants/userConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        loading: true,
        isAuthenticated: false,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    }

    case REGISTER_REQUEST: {
      return {
        loading: true,
        isAuthenticated: false,
      };
    }

    case REGISTER_SUCCESS: {
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case REGISTER_FAIL: {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    }

    case LOAD_USER_REQUEST: {
      return {
        loading: true,
        isAuthenticated: false,
      };
    }

    case LOAD_USER_SUCCESS: {
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case LOAD_USER_FAIL: {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    }

    case LOGOUT_SUCCESS: {
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    }

    case LOGOUT_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    }

    case UPDATE_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case UPDATE_PROFILE_RESET: {
      return {
        ...state,
        isUpdated: false,
      };
    }

    case UPDATE_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    }

    case UPDATE_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case UPDATE_PASSWORD_RESET: {
      return {
        ...state,
        isUpdated: false,
      };
    }

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
};
