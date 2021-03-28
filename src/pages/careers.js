import React, {useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper';

import Carousel from '../components/carousel.js';
import {Link} from 'react-scroll';

const CareersStyled = styled.div`
   .information-container{
     text-align: center;
      color: black;
      .items-container{
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 3em;
        padding: 4em 0;
        img{
          width: 232px;
          height: 78px;
        }
      }
    }
    .main-section{
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1190%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1191)'%3e%3c/rect%3e%3cpath d='M1357.89 268.09L1361 268.09L1361 283.45L1357.89 283.45z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M506.16 318.97a51.87 51.87 0 1 0-68.64 77.78z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M41.62 204.83 a54.53 54.53 0 1 0 109.06 0 a54.53 54.53 0 1 0 -109.06 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1246.06 151.04L1278.84 151.04L1278.84 202.19L1246.06 202.19z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M427.31 123.37 a22.68 22.68 0 1 0 45.36 0 a22.68 22.68 0 1 0 -45.36 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M873.78 178.6a55.28 55.28 0 1 0-26.17 107.42z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1163.69 436.12 a7.5 7.5 0 1 0 15 0 a7.5 7.5 0 1 0 -15 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1078.93 508.54L1080.08 508.54L1080.08 518.97L1078.93 518.97z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M932.61 207.87L947.4 207.87L947.4 222.66L932.61 222.66z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M548.46 255.99L560.76 255.99L560.76 291.03L548.46 291.03z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1164.58 352.11L1194.25 352.11L1194.25 404.34L1164.58 404.34z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M720.44 44.01L770.01 44.01L770.01 93.58L720.44 93.58z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M781.93 17.53 a46.75 46.75 0 1 0 93.5 0 a46.75 46.75 0 1 0 -93.5 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1134.49 396.83a50.85 50.85 0 1 0-88.22 50.6z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M126.98 425.28L169.21 425.28L169.21 470.76L126.98 470.76z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M83.43 341.44L99.71 341.44L99.71 357.72L83.43 357.72z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M300.89 494.39 a2.16 2.16 0 1 0 4.32 0 a2.16 2.16 0 1 0 -4.32 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M842.57 379.89 a6.95 6.95 0 1 0 13.9 0 a6.95 6.95 0 1 0 -13.9 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M919.25 18.65 a51.17 51.17 0 1 0 102.34 0 a51.17 51.17 0 1 0 -102.34 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M119.92 367.08a15.18 15.18 0 1 0-20.92-22z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M22.16 495.95a33.44 33.44 0 1 0-27.93-60.76z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M466.2 127.27 a35.11 35.11 0 1 0 70.22 0 a35.11 35.11 0 1 0 -70.22 0z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M964.98 59.84 a18.38 18.38 0 1 0 36.76 0 a18.38 18.38 0 1 0 -36.76 0z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1290.72 327.66a24 24 0 1 0-34.59 33.29z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M511.83 269.32a46.34 46.34 0 1 0-85.87 34.86z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1045.46 85.28 a21.62 21.62 0 1 0 43.24 0 a21.62 21.62 0 1 0 -43.24 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M506.41 299.26L515.89 299.26L515.89 308.74L506.41 308.74z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M159.06 360.95 a14.77 14.77 0 1 0 29.54 0 a14.77 14.77 0 1 0 -29.54 0z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1020.47 313.35L1044.09 313.35L1044.09 336.97L1020.47 336.97z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1202.08 500.45L1235.41 500.45L1235.41 501.62L1202.08 501.62z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M210.96 188.84L250.03 188.84L250.03 227.91L210.96 227.91z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M547.36 388.06a39.09 39.09 0 1 0 30.32 72.05z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1169.59 468.54L1178.09 468.54L1178.09 477.04L1169.59 477.04z' stroke='%23d3b714'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1190'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1191'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(45%2c 108%2c 188%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
      background-size: 100% 450px;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 4.4em -140px;
      height: 450px;
      color: white;
      h1{
        font-size: 2.4em;
        margin-bottom: 2em;
      }
    }
   
`;

export default function Contact () {
  useEffect (() => {
    window.scrollTo (0, 0);
  });
  return (
    <CareersStyled>
      <Wrapper>
        <div>
          <div className="main-section">
            <h1>Get your dream job!</h1>
            <h3>In this company work is equal to having fun.</h3>
            <Link className="btn btn-secondary" activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
            Search a job
            </Link>
          </div>
          <div>
            <p>Hacer un filtrar</p>
            <p>Poner Ultimas ofertas en el carrousel y cuando pongo mostrar mas, aparece mas informacion del puesto</p>
            <p>Mostrar una lista con todos los trabajos</p>
            <Carousel></Carousel>
          </div>
          <div className="information-container" id="section1">
            <h1>
              The main objective is to make our
              {' '}
              <br />
              {' '}
              clients feel good and also our employees
            </h1>
            <h3>For this..</h3>
            <div className="items-container" >
              <span className="icon-company">
                <img
                  src="https://res.cloudinary.com/matiaskaufman/image/upload/v1604350103/svg/087-location_pin_fsvvic.svg"
                  alt="icon1"
                />
                <p>Global service</p>
              </span>
              <span className="icon-company">
                <img
                  src="https://res.cloudinary.com/matiaskaufman/image/upload/v1604350098/svg/070-office_building_hpg2iq.svg"
                  alt="icon2"
                />
                <p>Attention in the office</p>
              </span>
              <span className="icon-company">
                <img
                  src="https://res.cloudinary.com/matiaskaufman/image/upload/v1604350100/svg/077-businessman_wrn9oq.svg"
                  alt="icon3"
                />
                <p>
                  Personal attention via mail
                </p>
              </span>
              <span className="icon-company">
                <img
                  src="https://res.cloudinary.com/matiaskaufman/image/upload/v1604350100/svg/078-suitcase_z0g5zd.svg"
                  alt="icon4"
                />
                <p>
                  Possibility to host new employees <br /> in our country
                </p>
              </span>
              <span className="icon-company">
                <img
                  src="https://res.cloudinary.com/matiaskaufman/image/upload/v1604350099/svg/076-notification_uiwvmo.svg"
                  alt="icon5"
                />
                <p>
                  We answer text messages <br /> on the spot
                </p>
              </span>
              <span className="icon-company">
                <img
                  src="https://res.cloudinary.com/matiaskaufman/image/upload/v1604350053/svg/048-relations_lxebon.svg"
                  alt="icon6"
                />
                <p>Team work is very important</p>
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
    </CareersStyled>
  );
}
