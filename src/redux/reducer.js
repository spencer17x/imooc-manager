import * as contants from './constants'

const defaultState = {
  title: '首页'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_TITLE:
      return { title: action.title }
    default:
      return state
  }
}