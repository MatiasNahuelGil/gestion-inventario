import { createContext } from "react";

export const ItemsContext = createContext();

export const UPLOAD_ITEMS = "UPLOAD_ITEMS";
export const SET_SEARCH_ITEM = "SET_SEARCH_ITEM";

const initialState = {
  items: [],
  searchTerm: "",
};

export const ItemsReducer = (state, action) => {
  switch (action.type) {
    case UPLOAD_ITEMS:
      return { ...state, items: action.payload };
    case SET_SEARCH_ITEM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export const initialItemsState = initialState;
