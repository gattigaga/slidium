import React, { Component } from "react";
import styled from "styled-components";

import TitleBox from "components/TitleBox";
import ToolBar from "components/ToolBar";
import ToolTextBox from "components/ToolTextBox";
import Tool from "components/Tool";
import Separator from "components/Separator";
import MenuBar from "components/MenuBar";
import MenuParent from "components/MenuParent";
import MenuChild from "components/MenuChild";
import MenuPopUp from "components/MenuPopUp";
import SlideStrip from "components/SlideStrip";
import Slide from "components/Slide";

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
    const fontSizes = [12, 14, 16, 18, 20, 22, 24, 30, 36, 48, 60, 72, 96];

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
                <MenuChild label="New" />
                <MenuChild label="Open" />
                <MenuChild label="Rename" />
              </MenuParent>
              <MenuParent label="Edit">
                <MenuChild label="Undo" icon="undo" />
                <MenuChild label="Redo" icon="redo" />
                <Separator />
                <MenuChild label="Copy" />
                <MenuChild label="Cut" />
                <MenuChild label="Paste" />
              </MenuParent>
              <MenuParent label="View">
                <MenuChild label="Play" />
                <Separator />
                <MenuChild label="Toggle Fullscreen" />
                <MenuChild label="Toggle Header" />
              </MenuParent>
              <MenuParent label="Slide">
                <MenuChild label="Add New" />
                <Separator />
                <MenuChild label="Move Up" />
                <MenuChild label="Move Down" />
                <MenuChild label="Move to Beginning" />
                <MenuChild label="Move to End" />
              </MenuParent>
              <MenuParent label="Help">
                <MenuChild label="About" />
              </MenuParent>
            </MenuBar>
          </Header>
        )}
        <ToolBar isExpanded={isExpanded} onClickToggle={this.toggleExpand}>
          <Tool icon="add_box" tooltip="New Slide" />
          <Tool icon="undo" tooltip="Undo" />
          <Tool icon="redo" tooltip="Redo" />
          <Separator orientation="vertical" />
          <Tool icon="call_made" tooltip="Select" />
          <Tool icon="text_fields" tooltip="Text Box" />
          <Tool icon="image" tooltip="Image" />
          <Separator orientation="vertical" />
          <ToolTextBox text="52" tooltip="Font Size">
            {fontSizes.map((size, index) => (
              <MenuChild key={index} label={size} isWithoutIcon />
            ))}
          </ToolTextBox>
          <Separator orientation="vertical" />
          <Tool icon="format_bold" tooltip="Bold" />
          <Tool icon="format_italic" tooltip="Italic" />
          <Tool icon="format_underline" tooltip="Underline" />
          <Separator orientation="vertical" />
          <Tool icon="format_align_left" tooltip="Align Left" />
          <Tool icon="format_align_center" tooltip="Align Center" />
          <Tool icon="format_align_right" tooltip="Align Right" />
          <Tool icon="format_align_justify" tooltip="Justify" />
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
