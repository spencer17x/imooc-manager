import * as contants from './constants'

export const handleChangeTitle = (title) => {
  return {
    type: contants.CHANGE_TITLE,
    title
  }
}