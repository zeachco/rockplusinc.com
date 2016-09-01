import axios from 'axios';
import store from '..';

export function fetchCategories() {
  axios
    .get('/api/categories/rockplusinc.com')
    .then(function(xhr) {
      store.dispatch({
        type: 'FETCH_CATEGORIES_DONE',
        payload: xhr.data
      });
    });
  store.dispatch({
    type: 'FETCH_CATEGORIES_START'
  });
};
