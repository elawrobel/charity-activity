import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Hero from './logo.png';

const Wrapper = styled.section`
  padding: 2em;
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 576px) {
    flex-direction: row;
    padding: 2em;
  }

  @media (min-width: 768px) {
    padding: 4em;
    justify-content: center;
  }
`;

const ContainerText = styled.div`
  flex: 0 0 50%;
  max-width: 100%;

  @media (min-width: 960px) {
    max-width: 50%;
    padding: 24px;
    width: 100%;
    flex-basis: 70%;
  }
`;

const ContainerImg = styled.div`
  flex: 0 0 50%;
  max-width: 100%;

  @media (min-width: 960px) {
    max-width: 50%;
    padding: 24px;
    width: 100%;
    flex-basis: 30%;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: left;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.black};
  font-weight: bold;

  @media (min-width: 960px) {
    font-size: 3em;
  }
`;

const Subtitle = styled.h2`
  font-size: 1em;
  text-align: left;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.black};

  @media (min-width: 960px) {
    font-size: 1em;
  }
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
        <ContainerText>
          <Title>
            <FormattedMessage {...messages.title} />
          </Title>
          <Subtitle>
            <FormattedMessage {...messages.subtitle} />
          </Subtitle>
        </ContainerText>
        <ContainerImg>
          <Image />
        </ContainerImg>
      </Wrapper>
    </>
  );
}
export default Text;