import axios from 'axios';
import store from '..';

function fetchCategories() {
  store.dispatch({
    type: 'FETCH_CATEGORIES_START'
  });
  return axios.get('/api/categories/rockplusinc.com').then(xhr => {
    store.dispatch({
      type: 'FETCH_CATEGORIES_DONE',
      payload: xhr.data.filter(cat => cat.count > 0)
    });
  });
}

module.exports = { fetchCategories };
