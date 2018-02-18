import { combineReducers } from "redux";
import {
  SET_PRESENTATION_TITLE,
  CREATE_SLIDE,
  REMOVE_SLIDE,
  MOVE_SLIDE
} from "store/actionTypes";

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

// Slides collection
export function slides(state = [1], action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_SLIDE:
      // Check if selected slide is between another slides
      const isBetween = payload.currentIndex < state.length + 1;
      // Get first slide until new slide
      const beginUntilNewSlide = [
        ...state.slice(0, payload.currentIndex + 1),
        state.length + 1
      ];

      // If selected slide is between another slides,
      // Insert new slide between
      // Otherwise, append with new slide in the last
      return isBetween
        ? [...beginUntilNewSlide, ...state.slice(payload.currentIndex + 1)]
        : beginUntilNewSlide;

    case REMOVE_SLIDE:
      return state.filter((slide, index) => index !== payload.selectedIndex);

    case MOVE_SLIDE:
      let result;

      switch (payload.position) {
        case "up":
          result = state.map((slide, index) => {
            // Check if current slide is selected
            const isSelectedSlide = index === payload.selectedIndex;
            // Check if current slide is destination where selected slide will move on
            const isDestination = index === payload.selectedIndex - 1;
            // Check if selected slide is first slide
            const isSelectedSlideIsFirst = payload.selectedIndex === 0;

            // This will swap slide position

            if (isSelectedSlide) {
              // If selected slide is first slide,
              // Don't move the slide
              // Otherwise, move upper slide to selected slide index
              return isSelectedSlideIsFirst ? state[index] : state[index - 1];
            } else if (isDestination) {
              // Move selected slide to upper slide index
              return state[index + 1];
            }

            return slide;
          });
          break;

        case "down":
          result = state.map((slide, index) => {
            // Check if current slide is selected
            const isSelectedSlide = index === payload.selectedIndex;
            // Check if current slide is destination where selected slide will move on
            const isDestination = index === payload.selectedIndex + 1;
            // Check if selected slide is last slide
            const isSelectedSlideIsLast =
              payload.selectedIndex === state.length - 1;

            // This will swap slide position

            if (isSelectedSlide) {
              // If selected slide is last slide,
              // Don't move the slide
              // Otherwise, move lower slide to selected slide index
              return isSelectedSlideIsLast ? state[index] : state[index + 1];
            } else if (isDestination) {
              // Move selected slide to lower slide index
              return state[index - 1];
            }

            return slide;
          });
          break;

        case "first":
          result = [
            state[payload.selectedIndex],
            ...state.filter((slide, index) => index !== payload.selectedIndex)
          ];
          break;

        case "last":
          result = [
            ...state.filter((slide, index) => index !== payload.selectedIndex),
            state[payload.selectedIndex]
          ];
          break;

        default:
          result = state;
          break;
      }

      return result;

    default:
      return state;
  }
}

const reducers = combineReducers({
  title,
  slides
});

export default reducers;
