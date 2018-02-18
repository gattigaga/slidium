import {
  SET_PRESENTATION_TITLE,
  CREATE_SLIDE,
  REMOVE_SLIDE,
  MOVE_SLIDE
} from "store/actionTypes";
import {
  setPresentationTitle,
  createSlide,
  removeSlide,
  moveSlide
} from "store/actions";

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

test("should create an action to create new slide after current selected slide", () => {
  const currentIndex = 0;
  const expected = {
    type: CREATE_SLIDE,
    payload: {
      currentIndex
    }
  };

  expect(createSlide(currentIndex)).toEqual(expected);
});

test("should create an action to remove current slide", () => {
  const selectedIndex = 0;
  const expected = {
    type: REMOVE_SLIDE,
    payload: {
      selectedIndex
    }
  };

  expect(removeSlide(selectedIndex)).toEqual(expected);
});

test("should create an action to move current slide", () => {
  const selectedIndex = 0;
  const position = "down";
  const expected = {
    type: MOVE_SLIDE,
    payload: {
      selectedIndex,
      position
    }
  };

  expect(moveSlide(selectedIndex, position)).toEqual(expected);
});
