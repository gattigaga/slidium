import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "components/Icon";

const Container = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  background: white;
  display: flex;
  padding: 0px 8px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  justify-content: space-between;
`;

const ToolContainer = styled.div`
  width: auto;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const Toggle = styled(Icon)`
  color: #888;
  cursor: pointer;
  padding: 4px;
  user-select: none;

  &:hover {
    color: black;
  }
`;

Toggle.displayName = "Toggle";

const ToolBar = ({ children, isExpanded, onClickToggle }) => (
  <Container>
    <ToolContainer>{children}</ToolContainer>
    <Toggle
      name={isExpanded ? "expand_less" : "expand_more"}
      onClick={onClickToggle}
    />
  </Container>
);

ToolBar.propTypes = {
  children: PropTypes.node,
  isExpanded: PropTypes.bool,
  onClickToggle: PropTypes.func
};

ToolBar.defaultProps = {
  isExpanded: true
};

export default ToolBar;
