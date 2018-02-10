import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  padding: 4px 8px;
  cursor: default;
  position: relative;
  user-select: none;

  &:hover {
    background: #eee;
  }
`;

const Label = styled.span`
  font-size: 12px;
  font-family: Roboto;
  color: black;
`;

const LabelActive = Container.extend`
  position: absolute;
  top: -28px;
  left: -1px;
  z-index: 3;
  background: white;
  border: 1px solid #ccc;
  border-bottom: 0px;
  padding-bottom: 5px;

  &:hover {
    background: white;
  }
`;

const Tray = styled.span`
  position: absolute;
  min-width: 192px;
  top: 100%;
  left: 0%;
  background: white;
  border: 1px solid #ccc;
  padding: 8px 0px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const MenuParent = ({ label, children, isOpen, onClick }) => (
  <Container onClick={onClick}>
    <Label>{label}</Label>
    {isOpen && (
      <Tray>
        <LabelActive>
          <Label>{label}</Label>
        </LabelActive>
        {children}
      </Tray>
    )}
  </Container>
);

MenuParent.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
};

MenuParent.defaultProps = {
  label: "Menu"
};

export default MenuParent;
