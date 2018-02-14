import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SlideThumbnail from "components/SlideThumbnail";

const StyledThumbnail = styled(SlideThumbnail)`
  margin: 12px 0px;
`;

const Container = styled.div`
  width: auto;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  background: white;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0px 16px;
`;

const TotalSlides = styled.span`
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
  color: #888;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 24px;
  overflow-y: scroll;

  & ${StyledThumbnail}:first-child {
    margin-top: 0px;
  }

  & ${StyledThumbnail}:last-child {
    margin-bottom: 0px;
  }
`;

StyledThumbnail.displayName = "StyledThumbnail";

const SlideStrip = ({ slides, onClickSlide, selected }) => (
  <Container>
    <Header>
      <TotalSlides>{slides.length} Slides</TotalSlides>
    </Header>
    <SlideContainer>
      {slides.map((slide, index) => (
        <StyledThumbnail
          key={index}
          indexCaption={index + 1}
          onClick={() => onClickSlide(index)}
          isActive={index === selected}
        />
      ))}
    </SlideContainer>
  </Container>
);

SlideStrip.propTypes = {
  slides: PropTypes.array,
  selected: PropTypes.number,
  onClickSlide: PropTypes.func
};

SlideStrip.defaultProps = {
  slides: [],
  selected: 0
};

export default SlideStrip;
