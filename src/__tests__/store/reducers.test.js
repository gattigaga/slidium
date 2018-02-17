import { setPresentationTitle } from "store/actions";
import { title } from "store/reducers";

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
