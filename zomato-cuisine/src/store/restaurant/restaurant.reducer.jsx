import {
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_ERROR,
  GET_RESTAURANTS_LOADING
} from './restaurant.actionTypes';

const initialState = {
  error: null,
  loading: false,
  data: []
}
const reducerRestaurant = (state = {...initialState}, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case GET_RESTAURANTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_RESTAURANTS_ERROR:
      return {
        ...state,
        error:true,
        loading:false
      }
    default:
      return state
  }
}

export default reducerRestaurant;