import React from 'react';
import styled from 'styled-components';
import { IoLogoApple } from 'react-icons/io';

interface HeaderProps {}

const HeaderBlock = styled.header``;

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderBlock>
      <IoLogoApple />
    </HeaderBlock>
  );
};

export default Header;
