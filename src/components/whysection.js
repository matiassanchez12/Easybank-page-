import React, {useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {animateScroll as scroll} from 'react-scroll';

const StyledSection = styled.div`
    background: var(--gray);
    text-align: center;
    padding-bottom: 5em;
    .why-container{
      padding-top:2.5em;
    }
    .why-info{
      h1{
      color: var(--darkBlue);
      font-size: 2.5em;
      font-weight: 300;
      line-height: 1.3;
    }
    p{
      font-size: 1em;
      line-height:1.7;
      margin-bottom: 5em;
    }
    }

    .grid-container{
      display:grid;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      /* grid-template-columns: auto; */
      grid-row-gap: 1.5em;
       h2{
        color: var(--darkBlue);
        font-weight:300;
       }
       p{
         line-height:1.7;
       }
    }
    .icon-arrowup{
      position: fixed;
      top: 85%;
      left: 92%;
      font-size: 3em;
      color: black;
      z-index: 3;
      transition: 0.2s ease-out;
      cursor:pointer;
    }
    .icon-arrowup:hover{
      color: #ffaf38;
      font-size: 3.2em;
    }
  @media screen and (min-width: 1024px){
    .why-info{
      text-align: start;
      margin-top: 2.5em;
      h1{
        line-height: 1.5;
        margin-bottom: .5em;
      }
      p{
        margin-bottom: 4em;
      }
      }
      .grid-container{
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      text-align: start;
      grid-column-gap: 2em;
      .item-grid{
      img{
        display: flex;
        margin: auto;
      }
     }
     }
    }
`;

export default function Whysection () {
  useEffect (() => {
    Aos.init ({duration: 1000});
  }, []);

  return (
    <StyledSection>
      <Wrapper>
        <div className="why-container" id="whysection">
          <div className="why-info">
            <h1>Why choose Easybank?</h1>
            <p>
              We leverage Open Banking to turn your bank account into your finatial hub. Control your finaces like never
              before.
            </p>
          </div>
          <div className="grid-container">
            <div className="item-grid" data-aos="zoom-in">
              <img
                src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815696/img/icon-online_czikym.svg"
                alt="online"
              />
              <h2>Online Banking</h2>
              <p>
                Our modern and Mobile applications allow you to keep track of your finances wherever you are in the world.
              </p>
            </div>
            <div className="item-grid" data-aos="zoom-in">
              <img
                src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815693/img/icon-budgeting_boruei.svg"
                alt="simple"
              />
              <h2>Simple Budgeting</h2>
              <p>
                See exactly where your money goes each month. Receive notifications when you're close to your hitting
                limits.
              </p>
            </div>
            <div className="item-grid" data-aos="zoom-in">
              <img
                src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815693/img/icon-budgeting_boruei.svg"
                alt="fast"
              />
              <h2>Fast Onboarding</h2>
              <p>
                We dont't do branches. Open your account in minutes online and start taking control of your finances right
                away.
              </p>
            </div>
            <div className="item-grid" data-aos="zoom-in">
              <img
                src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815695/img/icon-onboarding_ujxmhb.svg"
                alt="api"
              />
              <h2>Open API</h2>
              <p>
                Manage your saving, investments, pensions, and much more from one account. Tracking your money has never
                been easier.
              </p>
            </div>
          </div>
          <div className="icon-arrowup" onClick={() => scroll.scrollToTop ()}>
            <i className="fas fa-arrow-alt-circle-up" />
          </div>
        </div>
      </Wrapper>
    </StyledSection>
  );
}
