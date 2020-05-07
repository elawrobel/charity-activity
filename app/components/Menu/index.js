import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import NormalImg from 'components/Img';
import messages from './messages';
import Logo from './logo.png';

const Img = styled(NormalImg)`
  width: 60px;
  display: block;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.li`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  line-height: 40px;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  font-family: ${props => props.theme.fonts.random};
  font-size: 16px;
  color: ${props => props.theme.colors.black};

  span {
    &:after{
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 2px;
    }
    &:active,
    &:hover {
      font-weight: bold;

      &:after{
        background-color: ${props => props.theme.colors.yellow};
      }
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;

  span{
    display: inline-block;
    font-family: ${props => props.theme.fonts.random};
    border-radius: 10px;
    text-align: center;
    white-space: nowrap;
    transition: all .5s ease;
    padding: 0 20px;
    color: ${props => props.theme.colors.black};
    border: 2px solid;
    background-color: ${props => props.theme.colors.yellow};
    border-color: ${props => props.theme.colors.yellow};
    line-height: 44px;
    outline: 0;
  }
`;

function Menu() {
  return (
    <Wrapper>
      <Img src={Logo} alt="Logo" />
      <Nav>
        <NavItem>
          <NavLink to="/">
            <FormattedMessage {...messages.home} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/check-events">
            <FormattedMessage {...messages.check} />
          </NavLink>
        </NavItem>
        <NavItem>
          <Button to="/add-event">
            <FormattedMessage {...messages.add} />
            {/* QA: kady messages wpada w span, da się temu jakoś zapobiec? */}
          </Button>
        </NavItem>
      </Nav>
    </Wrapper>
  );
}

export default Menu;
