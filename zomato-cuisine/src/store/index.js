import {createStore, combineReducers, applyMiddleware} from 'redux'
import restaurantReducer from './restaurant/restaurant.reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  restaurant: restaurantReducer
})

const store = createStore (
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store