import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import { SlideStrip } from "components/SlideStrip";

let wrapper, onClickSlide;

beforeEach(() => {
  onClickSlide = jest.fn();
  wrapper = shallow(<SlideStrip onClickSlide={onClickSlide} />);
});

describe("SlideStrip", () => {
  it("renders without slide", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders with 3 slides", () => {
    wrapper = shallow(
      <SlideStrip slides={[1, 2, 3]} onClickSlide={onClickSlide} />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders with selected slide ", () => {
    // Index of selected slide
    const selectedIndex = 1;
    wrapper = shallow(
      <SlideStrip
        slides={[1, 2, 3]}
        onClickSlide={onClickSlide}
        selected={selectedIndex}
      />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onClickSlide'", () => {
    // Index of selected slide
    const selectedIndex = 1;
    wrapper = shallow(
      <SlideStrip
        slides={[1, 2, 3]}
        onClickSlide={onClickSlide}
        selected={selectedIndex}
      />
    );

    wrapper
      .find("SlideThumbnail")
      .at(selectedIndex)
      .simulate("click");

    expect(onClickSlide).toBeCalled();
    expect(onClickSlide).toBeCalledWith(selectedIndex);
  });
});
