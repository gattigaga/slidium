import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 160px;
  background: white;
  cursor: pointer;
  position: relative;
  border: ${({ isActive }) =>
    isActive ? "4px solid #1a85ff" : "1px solid #ccc"};
`;

const Content = styled.svg`
  width: 160px;
  height: 120px;
  box-sizing: border-box;
`;

const IndexContainer = styled.div`
  min-width: 24px;
  padding: 4px;
  background: #1a85ff;
  position: absolute;
  top: 0px;
  left: -4px;
  display: flex;
`;

const Index = styled.span`
  color: white;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  margin: auto;
`;

const SlideThumbnail = ({ onClick, isActive, className, indexCaption }) => (
  <Container onClick={onClick} isActive={isActive} className={className}>
    {isActive && (
      <IndexContainer>
        <Index>{indexCaption}</Index>
      </IndexContainer>
    )}
    <Content />
  </Container>
);

SlideThumbnail.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  indexCaption: PropTypes.number.isRequired
};

SlideThumbnail.defaultProps = {
  indexCaption: 0
};

export default SlideThumbnail;
