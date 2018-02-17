import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";

import ToolTextBox from "components/ToolTextBox";
import MenuPopUp from "components/MenuPopUp";
import MenuChild from "components/MenuChild";

let wrapper, onChange;

beforeEach(() => {
  onChange = jest.fn();
  wrapper = shallow(
    <ToolTextBox text="32" onChange={onChange}>
      <MenuPopUp position={{ y: "100%" }}>
        <MenuChild label="24" isWithoutIcon />
        <MenuChild label="32" isWithoutIcon />
        <MenuChild label="48" isWithoutIcon />
      </MenuPopUp>
    </ToolTextBox>
  );
});

describe("ToolTextBox", () => {
  it("renders without tooltip", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders with tooltip", () => {
    wrapper.setProps({
      tooltip: "Font Size"
    });

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("toggles dropdown", () => {
    wrapper = mount(
      <ToolTextBox text="32" onChange={onChange}>
        <MenuPopUp position={{ y: "100%" }}>
          <MenuChild label="24" isWithoutIcon />
          <MenuChild label="32" isWithoutIcon />
          <MenuChild label="48" isWithoutIcon />
        </MenuPopUp>
      </ToolTextBox>
    );

    // Open dropdown
    wrapper.find("Dropdown").simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();

    // Close dropdown
    wrapper.find("Dropdown").simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("calls 'onChange'", () => {
    const event = {
      target: {
        value: "64"
      }
    };

    expect(onChange.mock.calls.length).toEqual(0);
    wrapper.find("TextBox").simulate("change", event);
    expect(onChange.mock.calls.length).toEqual(1);
    expect(onChange).toBeCalledWith(event);
  });
});
