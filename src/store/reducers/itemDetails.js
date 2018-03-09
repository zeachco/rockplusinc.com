import { clone } from 'lodash';
import {ITEM_DETAILS} from '../types'; 

const defaultState = {
  item: null,
  options: {},
  calculatedPrice: 0
};

const itemDetails = (state = defaultState, action) => {
  switch (action.type) {
    case ITEM_DETAILS.OPEN:
      const item = action.payload.item;
      return {
        item,
        options: item.selectedOptions,
        calculatedPrice: item.getPrice()
      };
    case ITEM_DETAILS.CHOOSE_OPTION:
      state.item.selectOption(action.payload.code, action.payload.value);
      const calculatedPrice = state.item.getPrice();
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload.code]: action.payload
        },
        calculatedPrice
      };
    case ITEM_DETAILS.CLOSE:
      return clone(defaultState);
  default:
      return state;
  }
};

export default itemDetails;
