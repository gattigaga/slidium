import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  min-width: 64px;
  top: ${({ position }) => position.y};
  left: ${({ position }) => position.x};
  background: white;
  border: 1px solid #ccc;
  padding: 8px 0px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const MenuPopUp = ({ children, position, onClick }) => (
  <Container position={position} onClick={onClick}>
    {children}
  </Container>
);

MenuPopUp.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string
  }),
  onClick: PropTypes.func
};

MenuPopUp.defaultProps = {
  position: {
    x: "0px",
    y: "0px"
  }
};

export default MenuPopUp;
