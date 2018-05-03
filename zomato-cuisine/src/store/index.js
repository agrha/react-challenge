import { createStore, combineReducers } from 'redux'
import restaurantReducers from './restaurant/restaurant.reducer'
import detailReducers from './detail/detail.reducer'


const restaurant= combineReducers({
  restaurant: restaurantReducers,
  detail: detailReducers 
})


const store = createStore(
  restaurant,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store