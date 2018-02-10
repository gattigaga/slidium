import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Line = styled.div`
  width: ${({ orientation }) =>
    orientation === "horizontal" ? "100%" : "0px"};
  height: ${({ orientation }) =>
    orientation === "horizontal" ? "0px" : "100%"};
  margin: ${({ orientation }) =>
    orientation === "horizontal" ? "4px 0px" : "0px 4px"};
  box-sizing: border-box;

  ${({ orientation }) =>
    orientation === "horizontal"
      ? "border-top"
      : "border-right"} : 1px solid #ccc;
`;

const Separator = ({ orientation }) => <Line orientation={orientation} />;

Separator.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"])
};

Separator.defaultProps = {
  orientation: "horizontal"
};

export default Separator;
