import React from 'react';
import styled from 'styled-components';
import { FaRegCopyright } from 'react-icons/fa';

interface FooterProps {}

const FooterBlock = styled.footer`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 0.5rem;
  }
`;

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterBlock>
      <FaRegCopyright />
      2021 Laonstory Inc. - Mike
    </FooterBlock>
  );
};

export default Footer;
