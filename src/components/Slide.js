import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.svg`
  width: 640px;
  height: 480px;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.2);
  margin: auto;
`;

const Slide = () => <Container />;

Slide.propTypes = {};

export default Slide;
