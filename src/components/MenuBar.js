import React, { Component, Children, cloneElement } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-top: 4px;
`;

class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: -1
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  /**
   * Toggle menu open or close
   *
   * @param {number} index - Menu index
   * @memberof MenuBar
   */
  toggleMenu(index) {
    this.setState(prevState => {
      const { selectedMenu } = prevState;
      // Check if user was click to open it or not
      const isOpen = selectedMenu === index;

      return {
        selectedMenu: isOpen ? -1 : index
      };
    });
  }

  render() {
    const { selectedMenu } = this.state;
    const { children } = this.props;

    return (
      <Container>
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            isOpen: selectedMenu === index,
            onClick: () => this.toggleMenu(index)
          });
        })}
      </Container>
    );
  }
}

MenuBar.propTypes = {
  children: PropTypes.node
};

export default MenuBar;
