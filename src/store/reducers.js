import { combineReducers } from "redux";
import { SET_PRESENTATION_TITLE } from "store/actionTypes";

// Title of current presentation
export function title(state = "Untitled", action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PRESENTATION_TITLE:
      return payload.title;

    default:
      return state;
  }
}

const reducers = combineReducers({
  title
});

export default reducers;
