import {
    GET_RESTAURANTS_SUCCESS,
    GET_RESTAURANTS_ERROR,
    GET_RESTAURANTS_LOADING
  } from './restaurant.actionTypes';

import axios from 'axios'

export const getRestaurant = (payload) => {
  return dispatch => {
    dispatch(getRestaurantPending())
    axios.get(`https://developers.zomato.com/api/v2.1/search?category=${payload}&sort=cost&order=asc`,{headers: { 'user-key' : 'd40fded21a46889e1b6a52a9aaa08b63'}})
      .then(response => {
          // console.log(this.props.restaurants)
          dispatch(getRestaurantSuccess(response.data.restaurants))
          // let results = response.data.restaurants
          // this.setState({data: results})
      })
      .catch(err => console.log('makan nih',err));
    }
}

const getRestaurantSuccess = (payload) => ({
    type: GET_RESTAURANTS_SUCCESS,
    payload: payload
  })
  
const getRestaurantPending = (payload) => ({
  type: GET_RESTAURANTS_LOADING
})
  
const getRestaurantError = (payload) => ({
  type: GET_RESTAURANTS_ERROR
})