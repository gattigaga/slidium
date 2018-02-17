import { SET_PRESENTATION_TITLE } from "store/actionTypes";

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
