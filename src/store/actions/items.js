import axios from 'axios';
import store from '..';
import Item from 'n3000/shared/item-model'

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
  axios.get('/api/items' + path).then(xhr => {
    store.dispatch({
      type: 'LOAD_ITEMS_DONE',
      payload: xhr.data.map(i=> new Item(i))
    });
  })
}
