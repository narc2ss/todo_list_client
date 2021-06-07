import React from 'react';
import styled from 'styled-components';
import { Palette } from 'styles/palette';

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'to'> {}

const InputBlock = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${Palette.primaryTextColor};
  background-color: ${Palette.primary};
  border: 1px solid ${Palette.secondary};
  border-radius: 0.25rem;

  &::placeholder {
    color: ${Palette.primaryTextColor};
  }
  &:focus {
    box-shadow: 0px 0px 0.5rem rgba(0, 0, 0, 0.3);
    border: 1px solid ${Palette.primaryTextColor};
    transition: 0.3s all;
  }
`;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  const htmlProps = rest as any;
  return <InputBlock {...htmlProps} />;
};

export default Input;
