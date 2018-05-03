const reducers = (state=[], action) => {
  switch (action.type) {
    case 'GET_DETAIL_RESTAURANT':
      return action.payload
    default:
      return state
  }
}

export default reducers