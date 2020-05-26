import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Hero from './hero.png';

const Wrapper = styled.section`
  padding: 4em;
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  flex: 0 0 50%;
  max-width: 50%;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: left;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.black};
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  text-align: left;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.black};
`;

const Image = styled.div`
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-size: cover;
  transition: all .5s ease;
  width: 100%;
  padding-bottom: 70%;
`;

// Use them like any other React component – except they're styled!
function Text() {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>
            <FormattedMessage {...messages.title} />
          </Title>
          <Subtitle>
            <FormattedMessage {...messages.subtitle} />
          </Subtitle>
        </Container>
        <Container>
          <Image />
        </Container>
      </Wrapper>
    </>
  );
}
export default Text;