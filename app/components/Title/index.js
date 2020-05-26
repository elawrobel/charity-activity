import React from 'react';

import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';

import messages from './messages';


// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: #ececea;
  border-bottom: 1px solid black;
`;

// Use them like any other React component – except they're styled!
function Text() {
  return (
    <Wrapper>
      <Title>
        <FormattedMessage {...messages.text} />
      </Title>
    </Wrapper>
  );
}
export default Text;