import uuid from 'react-uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Test1' },
    { id: uuid(), name: 'Test2' },
    { id: uuid(), name: 'Test3' },
    { id: uuid(), name: 'Test4' },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ADD_ITEM:
      return { ...state, items: [action.payload, ...state.items] };
    default:
      return state;
  }
}
