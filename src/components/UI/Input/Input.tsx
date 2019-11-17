import React, { FC } from "react";
import styled from 'styled-components';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input:FC<IInputProps> = styled.input`
  height: 30px;
  width: 200px;
  padding: 0 10px;
`;

Input.defaultProps = {
  type: "text"
};

export default Input;
