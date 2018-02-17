import { SET_PRESENTATION_TITLE } from "store/actionTypes";
import { setPresentationTitle } from "store/actions";

test("should create an action to set presentation title", () => {
  const title = "My Presentation";
  const expected = {
    type: SET_PRESENTATION_TITLE,
    payload: {
      title
    }
  };

  expect(setPresentationTitle(title)).toEqual(expected);
});
