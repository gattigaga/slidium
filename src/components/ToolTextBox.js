import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Tooltip from "components/Tooltip";
import Icon from "components/Icon";

const StyledTooltip = styled(Tooltip)``;

const StyledIcon = styled(Icon)`
  color: #888;
  margin: auto;
  font-size: 14px;
`;

const TextBox = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: white;
  padding: 0px 4px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: bold;
  border: 0px;
  outline-width: 0px;
  color: #888;

  &:focus {
    border: 1px solid #ddd;
    background: white !important;
  }
`;

const Dropdown = styled.div`
  flex: 0.25;
  height: 100%;
  box-sizing: border-box;
  border-left: 1px solid white;
  background: ${({ isOpen }) => (isOpen ? "#eee" : "white")};
  display: flex;
  cursor: pointer;
  user-select: none;
`;

const Container = styled.div`
  width: 48px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 4px;
  background: white;
  margin: 4px;
  display: flex;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;

  &:hover {
    background: ${({ isOpen }) => (isOpen ? "white" : "#eee")};
  }

  &:hover ${StyledTooltip} {
    opacity: 1;
  }

  &:hover ${Dropdown} {
    background: #eee;
    ${({ isOpen }) => !isOpen && "border-left: 1px solid #ccc;"};
  }

  &:hover ${TextBox} {
    background: ${({ isOpen }) => (isOpen ? "white" : "#eee")};
  }
`;

TextBox.displayName = "TextBox";
Dropdown.displayName = "Dropdown";

class ToolTextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  /**
   * Toggle dropdown open or close
   *
   * @memberof ToolTextBox
   */
  toggleDropdown() {
    this.setState(prevState => {
      const { isOpen } = prevState;

      if (!isOpen) {
        this.textBox.select();
      }

      return {
        isOpen: !isOpen
      };
    });
  }

  render() {
    const { isOpen } = this.state;
    const { text, tooltip, onChange, children } = this.props;

    return (
      <Container isOpen={isOpen}>
        {!isOpen && tooltip && <StyledTooltip text={tooltip} />}
        <TextBox
          type="text"
          value={text}
          onChange={onChange}
          onClick={this.toggleDropdown}
          innerRef={ref => {
            this.textBox = ref;
          }}
        />
        <Dropdown onClick={this.toggleDropdown} isOpen={isOpen}>
          <StyledIcon name="arrow_drop_down" />
        </Dropdown>
        {isOpen && children}
      </Container>
    );
  }
}

ToolTextBox.propTypes = {
  text: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default ToolTextBox;
