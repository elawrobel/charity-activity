import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import styled from 'styled-components';
import NormalImg from 'components/Img';
import { Link } from 'react-router-dom';
import messages from './messages';
import Logo from './logo.png';
import Fcb from './fcb.svg';

const FcbUrl = 'https://www.facebook.com/groups/235355313496727/';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  border-top: 1px solid #666;
  position: relative;

  @media (min-width: 768px) {
    padding: 2em 4em;
  }
`;

const FcbLink = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;

  span {
    display: none;
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.text};

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 2px;
    }
    &:active,
    &:hover {
      font-weight: bold;

      &:after {
        background-color: ${props => props.theme.colors.yellow};
      }
    }

    @media (min-width: 768px) {
      display: inline-block;
    }
  }
`;

const Img = styled(NormalImg)`
  width: 60px;
  display: block;
`;

const ImgSmall = styled(NormalImg)`
  width: 40px;
  display: inline-block;
  background-color: ${props => props.theme.colors.yellow};
  padding: 6px;
  border-radius: 50%;
  margin-right: 8px;
  top: 34px;
  right: 273px;

  @media (min-width: 768px) {
    position: absolute;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Img src={Logo} alt="Logo" />
      <A to="/contact">
        <FormattedMessage {...messages.contactMessage} />
      </A>
      <FcbLink href={FcbUrl} target="_blank">
        <ImgSmall src={Fcb} alt="Facebook" />
        <FormattedMessage {...messages.smMessage} />
      </FcbLink>
    </Wrapper>
  );
}

export default Footer;
