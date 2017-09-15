import store from '..';
import { ITEM_DETAILS } from '../types';

function open(item) {
  store.dispatch({
    type: ITEM_DETAILS.OPEN,
    payload: { item } 
  });
}

function chooseItemOption(code, value) {
  store.dispatch({
    type: ITEM_DETAILS.CHOOSE_OPTION,
    payload: { code, value }
  });
}

function close() {
  store.dispatch({ type: ITEM_DETAILS.CLOSE });
}

module.exports = {
  open,
  chooseItemOption,
  close
};
