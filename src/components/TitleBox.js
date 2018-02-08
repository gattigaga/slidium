import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InputTitle = styled.input`
  width: ${props => props.value.length * 9}px;
  height: 24px;
  background: white;
  padding: 4px;
  font-family: Roboto;
  border: 1px solid white;
  font-size: 18px;
  outline-width: 0px;

  &:hover,
  &:focus {
    border: 1px solid #ddd;
  }
`;

const TitleBox = ({ value, onChange }) => (
  <InputTitle
    type="text"
    value={value}
    onChange={onChange}
    onClick={e => e.target.select()}
  />
);

TitleBox.propTypes = {
  value: PropTypes.node,
  onChange: PropTypes.func
};

TitleBox.defaultProps = {
  value: "Untitled"
};

export default TitleBox;
