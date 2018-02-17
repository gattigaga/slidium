import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 30px;
  cursor: pointer;
  position: relative;
  background: ${({ isActive }) => (isActive ? "#ccc" : "#ddd")};
`;

const Content = styled.svg`
  width: 160px;
  height: 120px;
  background: white;
  box-sizing: border-box;
  border: ${({ isActive }) =>
    isActive ? "2px solid #1a85ff" : "1px solid #ccc"};
`;

const Index = styled.span`
  color: black;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 12px;
  left: 12px;
  user-select: none;
`;

const SlideThumbnail = ({ onClick, isActive, className, indexCaption }) => (
  <Container onClick={onClick} isActive={isActive} className={className}>
    <Index>{indexCaption}</Index>
    <Content isActive={isActive} />
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
