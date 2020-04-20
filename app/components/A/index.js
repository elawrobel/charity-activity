/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.theme.colors.black};

  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`;

export default A;
