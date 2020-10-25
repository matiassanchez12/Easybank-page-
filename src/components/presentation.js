import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
const StyledPresentation = styled.div`
 padding-bottom: 5em;
 background: var(--lightGray);
.container{
  height: 100vh;
  text-align: center;
  padding-bottom: 5em;
  background: var(--lightGray);
}
  .img-container{
    height: 300px;
    margin: 0 calc(-1 * var(--wrapperSpace));
    background:url("https://res.cloudinary.com/matiaskaufman/image/upload/v1602815701/img/image-mockups_mpbdzf.png") center bottom no-repeat, url("https://res.cloudinary.com/matiaskaufman/image/upload/v1602815693/img/bg-intro-mobile_twslei.svg") center no-repeat;
    background-size: 345px, cover;
    img{
      display:none;
    }
  }
  .info-container{
    p{
      line-height: 1.7;
      font-size: .9em;
    }
    h1{
      font-size: 2.5em;
      color: var(--darkBlue);
      font-weight: 300;
      line-height:1.3;
      margin: 0;
      margin-top: .3em;
      margin-bottom: .5em;
    }
  }
  .button-container{
    border:none;
    color: white;
    font-size: 1em;
    padding: .9em 2.2em;
    border-radius: 1.5em;
    background: linear-gradient(to right, var(--limeGreen) 0%, var(--rightCyan) 100%);
    margin-top: 1.5em;
    
  }
  @media screen and (min-width: 1024px){
    padding-bottom: 0;
    background: var(--white);
    .container{
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: auto auto;
      grid-template-areas: "text images"
                           "button images";
      background: var(--white);
      padding-bottom: 0;
      .img-container{
        display:block;
        grid-area: images;
        align-self: start;
        background-size:  cover;
        background:white;
        position: absolute;
        width: 70%;
        left: 40%;
        height: 103%;
        box-sizing: border-box;
        background:url("https://res.cloudinary.com/matiaskaufman/image/upload/v1602815692/img/bg-intro-desktop_q3zsvi.svg") left 140px top -248px no-repeat;
        img{
          display:block;
          position: relative;
          left: 110px;
          top: -140px;
        }
      }
      .info-container{
        text-align: start;
        align-self: end;
        grid-area: text;
        p{
          margin-bottom: .5em;
        }
      }
      .button-container{
        grid-area: button;
        align-self: start;
        justify-self: start;
         cursor:pointer;
      }
    }
  }
`;

export default function Presentation () {
  return (
    <StyledPresentation>
      <Wrapper>
        <div className="container" id="presentation">
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815701/img/image-mockups_mpbdzf.png"
              alt="mockups"
            />
          </div>
          <div className="info-container">
            <h1>Next generation digital banking</h1>
            <p>
              Take your finalcial life online. Your Easybank account will be a one-stop-shop for spending.saving,budgeting, investing,
              and much more.
            </p>
          </div>
          <button className="button-container">
            Request Invite
          </button>
        </div>
      </Wrapper>
    </StyledPresentation>
  );
}
