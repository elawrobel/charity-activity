import React, { useState }  from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 2em;

  @media (min-width: 768px) {
    padding: 2em 4em;
  }
`;

const Slogan = styled.div`
  font-size: 1em;
  text-align: center;
  font-family: ${props => props.theme.fonts.title};
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 36px;

  span {
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: ${props => props.theme.colors.yellow};
    }
  }

  @media (min-width: 960px) {
    font-size: 2em;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  padding: 8px;

    button{
      background-color: ${props => props.theme.colors.yellow};
      border-color: ${props => props.theme.colors.yellow};
      font-size: 32px;
      padding: 8px;
      border-radius: 10%;
      box-shadow: 5px 8px 8px #888888;
    }
  }
`;


function Counter() {
  return (
    <div>
      <Wrapper>
        <Slogan>
          <FormattedMessage {...messages.count} />
        </Slogan>
        <CounterWrapper>
          <CounterButton />
        </CounterWrapper>
      </Wrapper>
    </div>
  );
}

export default Counter;

// TO DO: connect to firebase
function CounterButton() {
  const [count, setCount] = useState(100);

  // eslint-disable-next-line react/button-has-type
  return <button onClick={() => setCount(count + 1)}>{count} KM</button>;
}
