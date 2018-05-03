import {
  LOAD_RESTAURANT_SUCCESS,
  LOAD_RESTAURANT_ERROR,
  LOAD_RESTAURANT_LOADING,
  LOAD_NEWRESTAURANT_SUCCESS
} from './RESTAURANT.actionTypes';
import axios from 'axios'

export const loadRestaurant = (payload) => {
  return dispatch => {
    dispatch(loadRESTAURANTLoading())
    axios({
      method: 'get',byoo
      url: 'https://api.opendota.com/api/RESTAURANT'
    }).then(({ data }) => {
      const newData = data.slice(0, 30)
      dispatch(loadRESTAURANTSuccess(newData))
    }).catch(err => dispatch(loadRESTAURANTError()))
  }
}

export const loadNewTeam = (payload) => {
  return dispatch => {
    dispatch(loadNewRESTAURANTuccess(payload))
  }
}

const loadNewRESTAURANTuccess = (payload) => ({
  type: LOAD_NEWRESTAURANT_SUCCESS,
  payload: payload
})

const loadRESTAURANTSuccess = (payload) => ({
  type: LOAD_RESTAURANT_SUCCESS,
  payload: payload
})

const loadRESTAURANTLoading = (payload) => ({
  type: LOAD_RESTAURANT_LOADING
})

const loadRESTAURANTError = (payload) => ({
  type: LOAD_RESTAURANT_ERROR
})