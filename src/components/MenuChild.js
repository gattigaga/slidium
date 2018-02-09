import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Icon from "components/Icon";

const Container = styled.div`
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;

  &:hover {
    ${({ isClickable }) => isClickable && "background: #eee;"};
  }
`;

const IconContainer = styled.div`
  width: 32px;
  display: flex;
  position: relative;
`;

const StyledIcon = styled(Icon)`
  font-size: 20px;
  color: ${({ isClickable }) => (isClickable ? "#888" : "#bbb")};
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
`;

const Label = styled.span`
  font-size: 12px;
  font-family: Roboto;
  color: ${({ isClickable }) => (isClickable ? "black" : "#bbb")};
`;

const MenuChild = ({ label, icon, isClickable, onClick }) => (
  <Container isClickable={isClickable} onClick={() => isClickable && onClick()}>
    <IconContainer>
      {icon && <StyledIcon name={icon} isClickable={isClickable} />}
    </IconContainer>
    <Label isClickable={isClickable}>{label}</Label>
  </Container>
);

MenuChild.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  isClickable: PropTypes.bool,
  onClick: PropTypes.func
};

MenuChild.defaultProps = {
  label: "Menu",
  isClickable: true,
  onClick: () => {}
};

export default MenuChild;
