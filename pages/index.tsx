import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const CreditsWrapper = styled.div``;

const DebitsWrapper = styled.div``;

const Home = () => {
  const [credits, setCredit] = useState([
    {
      id: "01"
    }
  ]);

  const [debits, setDebit] = useState([
    {
      id: "01"
    }
  ]);

  return (
    <Wrapper>
      <CreditsWrapper>
        {credits.map(() => (
          <div>
            <input />
          </div>
        ))}
        <button onClick={() => setCredit([...credits, { id: "123" }])}>
          +
        </button>
      </CreditsWrapper>

      <DebitsWrapper>
        {debits.map(() => (
          <div>
            <input />
          </div>
        ))}
        <button onClick={() => setDebit([...debits, { id: "123" }])}>+</button>
      </DebitsWrapper>
    </Wrapper>
  );
};

export default Home;
