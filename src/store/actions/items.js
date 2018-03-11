import store from '..';
import {backend} from '../../utils/api'

export function fetchItems(path = '') {
  store.dispatch({
    type: 'LOAD_ITEMS_START'
  });
  backend('items' + path).then(data => {
    store.dispatch({
      type: 'LOAD_ITEMS_DONE',
      payload: data
    });
  })
}

export function searchItems(text) {
  fetchItems('/search/' + text);
}

export function fetchCategory(category) {
  fetchItems('/category/' + category);
}

export default {
  searchItems,
  fetchCategory,
  fetchItems
};
