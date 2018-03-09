import store from '..';
import { ITEM_DETAILS } from '../types';

export function open(item) {
  store.dispatch({
    type: ITEM_DETAILS.OPEN,
    payload: { item } 
  });
}

export function chooseItemOption(code, value) {
  store.dispatch({
    type: ITEM_DETAILS.CHOOSE_OPTION,
    payload: { code, value }
  });
}

export function close() {
  store.dispatch({ type: ITEM_DETAILS.CLOSE });
}

export default {
  open,
  chooseItemOption,
  close
};
