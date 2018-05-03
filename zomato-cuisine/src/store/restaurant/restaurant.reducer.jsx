import {
  LOAD_RESTAURANT_SUCCESS,
  LOAD_RESTAURANT_ERROR,
  LOAD_RESTAURANT_LOADING,
} from './restaurant.actionTypes';

const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case LOAD_RESTAURANT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case LOAD_RESTAURANT_LOADING:
      return {
        ...state,
        loading: true,
        data: []
      }
    case LOAD_RESTAURANT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state;
  }
}

export default reducers;