import axios from 'axios';
import store from '..';

export function searchItems(text) {
  fetchItems('/search/' + text);
}

export function fetchCategory(category) {
  fetchItems('/category/' + category);
}

export function fetchItems(path = '') {
  store.dispatch({
    type: 'LOAD_ITEMS_START'
  });
  axios.get('/api/items' + path).then(data => {
    store.dispatch({
      type: 'LOAD_ITEMS_DONE',
      payload: data
    });
  })
}
