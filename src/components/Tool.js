import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "components/Icon";
import Tooltip from "components/Tooltip";

const StyledIcon = styled(Icon)`
  color: ${({ isActive }) => (isActive ? "#222" : "#888")};
  font-size: 20px;
  margin: auto;
`;

const StyledTooltip = styled(Tooltip)``;

const Container = styled.div`
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 4px;
  background: ${({ isActive }) => (isActive ? "#ddd" : "white")};
  margin: 4px;
  display: flex;
  cursor: pointer;
  user-select: none;
  position: relative;

  &:hover {
    background: ${({ isActive }) => (isActive ? "#ddd" : "#eee")};
  }

  &:hover ${StyledIcon} {
    color: #222;
  }

  &:hover ${StyledTooltip} {
    opacity: 1;
  }
`;

const Tool = ({ icon, tooltip, isActive, onClick }) => (
  <Container onClick={onClick} isActive={isActive}>
    {tooltip && <StyledTooltip text={tooltip} />}
    <StyledIcon name={icon} isActive={isActive} />
  </Container>
);

Tool.propTypes = {
  icon: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
};

Tool.defaultProps = {
  isActive: false
};

export default Tool;
