import React from 'react';
import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';
import { Palette } from 'styles/palette';

interface HeaderProps {
  onLogout: () => void;
}

const HeaderBlock = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div {
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.4);
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Palette.secondary};
    border-radius: 2rem;
    cursor: pointer;
    svg {
      font-size: 2rem;
      margin-left: -0.35rem;
    }

    &:hover {
      svg {
        color: ${Palette.primartTextHover};
      }
    }

    &:active {
      transition: 0.3s all;
      transform: translateY(3px);
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <HeaderBlock>
      <div onClick={onLogout}>
        <BiLogOut />
      </div>
    </HeaderBlock>
  );
};

export default Header;
