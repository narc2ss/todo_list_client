import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import { Palette } from 'styles/palette';

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'to'> {}

const ButtonBlock = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${Palette.primaryTextColor};
  border: 1px solid ${Palette.primaryTextColor};
  border-radius: 0.25rem;
  color: ${Palette.primary};
  font-weight: bold;
  font-size: 1.5rem;

  &:hover {
    background-color: ${Palette.primartTextHover};
  }
  &:active {
    transition: 0.2s all;
    transform: translateY(3px);
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const htmlProps = rest as any;
  return <ButtonBlock {...htmlProps}>{children}</ButtonBlock>;
};

export default Button;
