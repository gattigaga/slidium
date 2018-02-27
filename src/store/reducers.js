import { combineReducers } from "redux";
import {
  SET_PRESENTATION_TITLE,
  CREATE_SLIDE,
  REMOVE_SLIDE,
  MOVE_SLIDE,
  SELECT_SLIDE,
  SET_HEADER_EXPAND
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
      switch (payload.position) {
        case "up":
          return state.map((slide, index) => {
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

        case "down":
          return state.map((slide, index) => {
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

        case "first":
          return [
            state[payload.selectedIndex],
            ...state.filter((slide, index) => index !== payload.selectedIndex)
          ];

        case "last":
          return [
            ...state.filter((slide, index) => index !== payload.selectedIndex),
            state[payload.selectedIndex]
          ];

        default:
          return state;
      }

    default:
      return state;
  }
}

// Selected slide index
export function selectedSlide(state = 0, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_SLIDE:
      return payload.slideIndex;

    default:
      return state;
  }
}

// Check if header is expand or not
export function isHeaderExpand(state = true, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_HEADER_EXPAND:
      return payload.isExpand;

    default:
      return state;
  }
}

const reducers = combineReducers({
  title,
  slides,
  selectedSlide,
  isHeaderExpand
});

export default reducers;
