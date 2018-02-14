import React, { Component } from "react";
import styled from "styled-components";

import TitleBox from "components/TitleBox";
import ToolBar from "components/ToolBar";
import Tool from "components/Tool";
import Separator from "components/Separator";
import MenuBar from "components/MenuBar";
import MenuParent from "components/MenuParent";
import MenuChild from "components/MenuChild";
import SlideStrip from "components/SlideStrip";
import Slide from "components/Slide";
import MenuPopUp from "components/MenuPopUp";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
  background: #ddd;
`;

const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  background: white;
  padding: 4px 8px;
  border-bottom: 1px solid #ccc;
`;

const Workspace = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
`;

const SlideContainer = styled.div`
  display: flex;
  flex: 1;
  box-sizing: border-box;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Untitled",
      isExpanded: true,
      slides: [1, 2, 3, 4, 5],
      selectedSlide: 0
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
    const { title, isExpanded, selectedSlide, slides } = this.state;

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
        <Workspace>
          <SlideStrip
            slides={slides}
            selected={selectedSlide}
            onClickSlide={index => this.setState({ selectedSlide: index })}
          />
          <SlideContainer>
            <Slide />
          </SlideContainer>
        </Workspace>
      </Container>
    );
  }
}

export default App;
