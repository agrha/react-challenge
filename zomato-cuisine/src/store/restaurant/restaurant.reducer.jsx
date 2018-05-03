const reducers = (state=[], action) => {
  switch (action.type) {
    case 'GET_ALL_RESTAURANT':
      return action.payload
    default:
      return state
  }
}

export default reducers