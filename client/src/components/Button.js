import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 3em;
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
