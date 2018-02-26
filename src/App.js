import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import TitleBox from "components/TitleBox";
import ToolBar from "components/ToolBar";
import ToolTextBox from "components/ToolTextBox";
import Tool from "components/Tool";
import Separator from "components/Separator";
import MenuBar from "components/MenuBar";
import MenuParent from "components/MenuParent";
import MenuChild from "components/MenuChild";
import SlideStrip from "components/SlideStrip";
import Slide from "components/Slide";

import {
  setPresentationTitle,
  setHeaderExpand,
  createSlide,
  removeSlide,
  selectSlide,
  moveSlide
} from "store/actions";

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
  render() {
    const {
      title,
      isHeaderExpand,
      expandHeader,
      newSlide,
      deleteSlide,
      setTitle,
      moveSlideTo
    } = this.props;
    const fontSizes = [12, 14, 16, 18, 20, 22, 24, 30, 36, 48, 60, 72, 96];

    return (
      <Container>
        {isHeaderExpand && (
          <Header>
            <TitleBox value={title} onChange={e => setTitle(e.target.value)} />
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
                <MenuChild
                  label="Toggle Header"
                  onClick={() => expandHeader(!isHeaderExpand)}
                />
              </MenuParent>
              <MenuParent label="Slide">
                <MenuChild label="Add New" onClick={newSlide} />
                <MenuChild label="Remove" onClick={deleteSlide} />
                <Separator />
                <MenuChild label="Move Up" onClick={() => moveSlideTo("up")} />
                <MenuChild
                  label="Move Down"
                  onClick={() => moveSlideTo("down")}
                />
                <MenuChild
                  label="Move to Beginning"
                  onClick={() => moveSlideTo("first")}
                />
                <MenuChild
                  label="Move to End"
                  onClick={() => moveSlideTo("last")}
                />
              </MenuParent>
              <MenuParent label="Help">
                <MenuChild label="About" />
              </MenuParent>
            </MenuBar>
          </Header>
        )}
        <ToolBar
          isExpanded={isHeaderExpand}
          onClickToggle={() => expandHeader(!isHeaderExpand)}
        >
          <Tool icon="add_box" tooltip="New Slide" onClick={newSlide} />
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
          <SlideStrip />
          <SlideContainer>
            <Slide />
          </SlideContainer>
        </Workspace>
      </Container>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  isHeaderExpand: PropTypes.bool,
  expandHeader: PropTypes.func,
  newSlide: PropTypes.func,
  deleteSlide: PropTypes.func,
  setTitle: PropTypes.func,
  moveSlideTo: PropTypes.func
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    expandHeader: isExpand => dispatch(setHeaderExpand(isExpand)),
    setTitle: title => dispatch(setPresentationTitle(title)),
    newSlide: currentIndex => {
      dispatch(selectSlide(currentIndex + 1));
      dispatch(createSlide(currentIndex));
    },
    deleteSlide: selectedIndex => {
      dispatch(removeSlide(selectedIndex));
    },
    chooseSlide: selectedIndex => {
      dispatch(selectSlide(selectedIndex));
    },
    moveSlideTo: (selectedIndex, position) =>
      dispatch(moveSlide(selectedIndex, position))
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { selectedSlide, slides } = stateProps;
  const { deleteSlide, chooseSlide, newSlide, moveSlideTo } = dispatchProps;

  return {
    ...stateProps,
    ...dispatchProps,
    newSlide: () => newSlide(selectedSlide),
    deleteSlide: () => {
      // Prevent slide deletion if just one slide left
      if (slides.length === 1) return;

      deleteSlide(selectedSlide);

      // Select previous slide if current selected slide
      // is not first slide
      if (selectedSlide > 0) {
        chooseSlide(selectedSlide - 1);
      }
    },
    moveSlideTo: position => moveSlideTo(selectedSlide, position)
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
