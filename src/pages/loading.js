import React from 'react';
import styled from 'styled-components';
import LoadingIcon from '../components/loading';
const LoadingStyled = styled.div`
    display: grid;
    justify-content: center;
    .logo-header{
        text-align: center;
        margin: 50px;
        img{
            width: 250px;
            height: 80px;
        }
    }
    .loading-gif{
        justify-self: center;
        text-align: center;
    }
`;

export default function Loading () {
  return (
    <LoadingStyled>
      <div className="logo-header">
        <img
          src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815695/img/logo_ubkliy.svg"
          alt="logo"
        />
      </div>
      <div className="loading-gif">
        <LoadingIcon />
        <h2>Loading..</h2>
      </div>
    </LoadingStyled>
  );
}
