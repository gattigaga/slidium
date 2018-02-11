import React, { Component } from "react";
import styled from "styled-components";

import TitleBox from "components/TitleBox";
import ToolBar from "components/ToolBar";
import Tool from "components/Tool";
import Separator from "components/Separator";
import MenuBar from "components/MenuBar";
import MenuParent from "components/MenuParent";
import MenuChild from "components/MenuChild";

const Container = styled.header`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #ddd;
`;

const Header = styled.header`
  width: 100%;
  background: white;
  padding: 4px 8px;
  border-bottom: 1px solid #ccc;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Untitled",
      isExpanded: true
    };

    this.toggleExpand = this.toggleExpand.bind(this);
  }

  /**
   * Expand or shrink header
   *
   * @memberof App
   */
  toggleExpand() {
    this.setState(prevState => {
      const { isExpanded } = prevState;

      return {
        isExpanded: !isExpanded
      };
    });
  }

  render() {
    const { title, isExpanded } = this.state;

    return (
      <Container>
        {isExpanded && (
          <Header>
            <TitleBox
              value={title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <MenuBar>
              <MenuParent label="File">
                <MenuChild icon="print" label="New Presentation" />
                <MenuChild label="Open" />
                <MenuChild label="Rename" isClickable={false} />
              </MenuParent>
              <MenuParent label="Edit">
                <MenuChild icon="print" label="New Presentation" />
                <MenuChild label="Open" />
                <Separator />
                <MenuChild label="Rename" isClickable={false} />
              </MenuParent>
              <MenuParent label="View" />
              <MenuParent label="Slide" />
              <MenuParent label="Help" />
            </MenuBar>
          </Header>
        )}
        <ToolBar isExpanded={isExpanded} onClickToggle={this.toggleExpand}>
          <Tool icon="print" />
          <Separator orientation="vertical" />
        </ToolBar>
      </Container>
    );
  }
}

export default App;
