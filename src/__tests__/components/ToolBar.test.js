import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import ToolBar from "components/ToolBar";
import Tool from "components/Tool";
import Separator from "components/Separator";

let wrapper, onClickToggle;

beforeEach(() => {
  onClickToggle = jest.fn();
  wrapper = shallow(<ToolBar onClickToggle={onClickToggle} />);
});

describe("ToolBar", () => {
  it("renders with empty tool", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders with some tools", () => {
    wrapper = shallow(
      <ToolBar onClickToggle={onClickToggle}>
        <Tool icon="undo" />
        <Tool icon="redo" />
        <Separator orientation="vertical" />
      </ToolBar>
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders not expanded", () => {
    wrapper.setProps({
      isExpanded: false
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onClickToggle'", () => {
    expect(onClickToggle.mock.calls.length).toEqual(0);
    wrapper.find("Toggle").simulate("click");
    expect(onClickToggle.mock.calls.length).toEqual(1);
  });
});
