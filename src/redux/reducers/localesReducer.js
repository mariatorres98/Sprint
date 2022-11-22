import { localesTypes } from "../types/localesTypes";

const initialState={
  locales: []
}

export const localesReducer = (state = initialState, action) => {
  switch (action.type) {
    case localesTypes.LOCALES_GET:
      return{...state,locales:[...action.payload,]};
    default:
      return state;
  }
};
