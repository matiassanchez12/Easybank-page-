import React from 'react';
import styled from 'styled-components';

import Wrapper from '../components/wrapper';

const BlogStyled = styled.div`
    h1{
      padding: 5em;
    }
`;

export default function Contact () {
  return (
    <div>
      <BlogStyled>
        <Wrapper>
          <h1>Blog</h1>
        </Wrapper>
      </BlogStyled>
    </div>
  );
}
