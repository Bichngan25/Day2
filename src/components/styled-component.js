// StyledComponent/index.js
import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007aff;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;