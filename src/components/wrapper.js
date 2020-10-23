import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
    padding: 0 var(--wrapperSpace);
    max-width: calc(1115px + 1.5em);
    margin: auto;
    width: 100%;
    box-sizing: border-box;
`;
export default function Wrapper({children}) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
}
