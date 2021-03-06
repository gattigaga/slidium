import {
  SET_PRESENTATION_TITLE,
  CREATE_SLIDE,
  REMOVE_SLIDE,
  MOVE_SLIDE,
  SELECT_SLIDE,
  SET_HEADER_EXPAND
} from "store/actionTypes";

/**
 * Set presentation title
 *
 * @export
 * @param {string} title - New presentation title
 * @returns {object}
 */
export function setPresentationTitle(title) {
  return {
    type: SET_PRESENTATION_TITLE,
    payload: {
      title
    }
  };
}

/**
 * Create new slide after current selected slide
 *
 * @export
 * @param {number} currentIndex - Current selected slide index
 * @returns {object}
 */
export function createSlide(currentIndex) {
  return {
    type: CREATE_SLIDE,
    payload: {
      currentIndex
    }
  };
}

/**
 * Remove selected slide
 *
 * @export
 * @param {number} selectedIndex - Selected slide index
 * @returns {object}
 */
export function removeSlide(selectedIndex) {
  return {
    type: REMOVE_SLIDE,
    payload: {
      selectedIndex
    }
  };
}

/**
 * Move slide to specified position
 *
 * @export
 * @param {number} selectedIndex - Selected slide index
 * @param {string} position - Position where slide want to move on
 * @returns {object}
 */
export function moveSlide(selectedIndex, position) {
  return {
    type: MOVE_SLIDE,
    payload: {
      selectedIndex,
      position
    }
  };
}

/**
 * Select existing slide
 *
 * @export
 * @param {number} slideIndex - Slide which will be selected
 * @returns {object}
 */
export function selectSlide(slideIndex) {
  return {
    type: SELECT_SLIDE,
    payload: {
      slideIndex
    }
  };
}

/**
 * Set header to expand or not
 *
 * @export
 * @param {boolean} isExpand - Toggle to expand header
 * @returns {object}
 */
export function setHeaderExpand(isExpand) {
  return {
    type: SET_HEADER_EXPAND,
    payload: {
      isExpand
    }
  };
}
