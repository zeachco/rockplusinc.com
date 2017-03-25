import axios from 'axios';
import store from '..';

function fetchItems(path = '') {
  store.dispatch({
    type: 'LOAD_ITEMS_START'
  });
  axios.get('/api/items' + path).then(xhr => {
    store.dispatch({
      type: 'LOAD_ITEMS_DONE',
      payload: xhr.data
    });
  })
}

function searchItems(text) {
  fetchItems('/search/' + text);
}

function fetchCategory(category) {
  fetchItems('/category/' + category);
}

module.exports = {
  searchItems,
  fetchCategory,
  fetchItems
};
