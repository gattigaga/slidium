import {
  setPresentationTitle,
  createSlide,
  removeSlide,
  moveSlide,
  setHeaderExpand
} from "store/actions";
import { title, slides, isHeaderExpand } from "store/reducers";

describe("title", () => {
  it("should return initial state", () => {
    const expected = "Untitled";
    expect(title(expected, {})).toEqual(expected);
  });

  it("should return new title", () => {
    const expected = "My Presentation";
    const action = setPresentationTitle(expected);

    expect(title("Untitled", action)).toEqual(expected);
  });
});

describe("slides", () => {
  it("should return initial state", () => {
    const expected = [1];
    expect(slides(expected, {})).toEqual(expected);
  });

  it("should return with new created slide last", () => {
    const initial = [1];
    const expected = [1, 2];
    const action = createSlide(0);

    expect(slides(initial, action)).toEqual(expected);
  });

  it("should return with new created slide between other slides", () => {
    const initial = [1, 2];
    const expected = [1, 3, 2];
    const action = createSlide(0);

    expect(slides(initial, action)).toEqual(expected);
  });

  it("should return without removed slide", () => {
    const initial = [1, 2, 3];
    const expected = [1, 3];
    const action = removeSlide(1);

    expect(slides(initial, action)).toEqual(expected);
  });

  it("should return with moved slide up", () => {
    const initial = [1, 2, 3, 4];
    const expected = [1, 3, 2, 4];
    const action = moveSlide(2, "up");

    expect(slides(initial, action)).toEqual(expected);
  });

  it("should return with moved slide down", () => {
    const initial = [1, 2, 3, 4];
    const expected = [1, 3, 2, 4];
    const action = moveSlide(1, "down");

    expect(slides(initial, action)).toEqual(expected);
  });

  it("should return current slides although after move first slide up", () => {
    const initial = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    const action = moveSlide(0, "up");

    expect(slides(initial, action)).toEqual(expected);
  });

  it("should return current slides although after move last slide down", () => {
    const initial = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    const action = moveSlide(3, "down");

    expect(slides(initial, action)).toEqual(expected);
  });

  it("should return with moved slide to the beginning", () => {
    const initial = [1, 2, 3, 4];
    const expected = [3, 1, 2, 4];
    const action = moveSlide(2, "first");

    expect(slides(initial, action)).toEqual(expected);
  });

  it("should return with moved slide to the end", () => {
    const initial = [1, 2, 3, 4];
    const expected = [1, 3, 4, 2];
    const action = moveSlide(1, "last");

    expect(slides(initial, action)).toEqual(expected);
  });
});

describe("isHeaderExpand", () => {
  it("should return initial state", () => {
    const expected = false;
    expect(isHeaderExpand(expected, {})).toEqual(expected);
  });

  it("should return in expand mode", () => {
    const initial = false;
    const expected = true;
    const action = setHeaderExpand(true);

    expect(isHeaderExpand(initial, action)).toEqual(expected);
  });
});
