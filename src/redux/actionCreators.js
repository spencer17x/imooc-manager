import * as constants from './constants'

export const handleChangeTitle = (title) => {
  return {
    type: constants.CHANGE_TITLE,
    title
  }
}