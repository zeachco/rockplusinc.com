import store from '..';
import {backend} from '../../utils/api';

export function fetchCategories() {
  store.dispatch({
    type: 'FETCH_CATEGORIES_START'
  });
  return backend('categories/rockplusinc.com').then(data => {
    store.dispatch({
      type: 'FETCH_CATEGORIES_DONE',
      payload: data
    });
  });
}

export default { fetchCategories };
