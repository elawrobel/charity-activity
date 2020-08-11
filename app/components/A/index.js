/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.text};

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
`;

export default A;
