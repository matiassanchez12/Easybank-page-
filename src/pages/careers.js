import React from 'react';
import styled from 'styled-components';

import Wrapper from '../components/wrapper';

const CareersStyled = styled.div`
    .elh1{
      padding: 5em;
    }
`;

export default function Contact () {
  return (
    <div>
      <CareersStyled>
        <Wrapper>
          <h1 className="elh1">Careers</h1>
        </Wrapper>
      </CareersStyled>
    </div>
  );
}
