import * as constants from './constants';
import menuConfig from '../config/menuConfig';

const path = window.location.hash.substring(1);
const menuObject = menuConfig.reduce((previousValue, currentValue) => {
  const o = currentValue.children ? {...currentValue.children} : currentValue;
  previousValue.push(o);
  return previousValue;
}, []);
const title = menuObject.find(m => m.key === path) ? menuObject.find(m => m.key === path).title : '首页';

const defaultState = {
  title
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_TITLE:
      return {title: action.title};
    default:
      return state;
  }
}