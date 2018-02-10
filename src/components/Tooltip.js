import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  padding: 4px 8px;
  background: #222;
  white-space: nowrap;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.1s;
`;

const Arrow = styled.div`
  width: 8px;
  height: 8px;
  background: #222;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
`;

const Text = styled.span`
  color: white;
  font-family: Roboto;
  font-size: 10px;
  font-weight: bold;
`;

const Tooltip = ({ text, className }) => (
  <Container className={className}>
    <Arrow />
    <Text>{text}</Text>
  </Container>
);

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Tooltip;
