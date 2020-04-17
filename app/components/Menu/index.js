import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';

const Nav = styled.ul`
  text-align: right;
`;

const NavItem = styled.li`
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #090909;
  text-transform: uppercase;

  &:active,
  &:hover {
    color: #0070ad;
  }
`;

function Menu() {
  return (
    <div>
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
          <NavLink to="/add-event">
            <FormattedMessage {...messages.add} />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Menu;
