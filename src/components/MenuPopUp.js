import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  min-width: 192px;
  top: ${({ position }) => position.y};
  left: ${({ position }) => position.x};
  background: white;
  border: 1px solid #ccc;
  padding: 8px 0px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const MenuPopUp = ({ children, position }) => (
  <Container position={position}>{children}</Container>
);

MenuPopUp.propTypes = {
  children: PropTypes.node,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};

MenuPopUp.defaultProps = {
  position: {
    x: 0,
    y: 0
  }
};

export default MenuPopUp;