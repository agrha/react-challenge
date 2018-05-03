import {createStore, combineReducers} from 'redux'
import restaurantReducer from './restaurant.reducer'

const reducer = combineReducers({
  restaurant: restaurantReducer
})

const store = createStore (
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store