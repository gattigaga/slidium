import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import MenuBar from "components/MenuBar";
import MenuParent from "components/MenuParent";

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <MenuBar>
      <MenuParent label="New" />
      <MenuParent label="Edit" />
      <MenuParent label="View" />
    </MenuBar>
  );
});

describe("MenuBar", () => {
  it("renders empty child", () => {
    wrapper = shallow(<MenuBar />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("renders with child", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("toggle first menu", () => {
    // Open Menu
    wrapper
      .find("MenuParent")
      .first()
      .simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();

    // Close Menu
    wrapper
      .find("MenuParent")
      .first()
      .simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("open first menu, autoclose it, and then open second menu", () => {
    // Open Menu
    wrapper
      .find("MenuParent")
      .first()
      .simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();

    // Close Menu
    wrapper
      .find("MenuParent")
      .at(1)
      .simulate("click");
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
