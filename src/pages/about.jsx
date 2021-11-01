import React, {useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper';
import Aos from 'aos';
import {Link} from 'react-scroll';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';

const AboutStyled = styled.div`
   padding: 5em 0;
   .text-container{
        display: grid;
        grid-template-areas: "icon1 card1 a"
                             "c card2 icon2";
        grid-template-columns: 200px 400px 200px;
        grid-template-rows: 400px 400px;
        grid-row-gap: 2em;
        grid-column-gap: 5em;
        margin: 0 -130px;
        padding: 80px 424px;
        justify-content: center;
        background: #e0eaf5;
        .icon-bank-1{
          background:none;
          grid-area: icon1;
          align-self: center;
          img{
            width: 250px;
            height: 250px;
            border: 1px solid #7B7E8E;
            border-radius: 12px;
          }
        }
        .icon-bank-2{
          background:none;
          grid-area: icon2;
          align-self: center;
          img{
            width: 250px;
            height: 250px;
            padding: 10px;
            border: 1px solid #7B7E8E;
            border-radius: 12px;
          }
        }
        .card-1{
          grid-area: card1;
        }
        .card-2{
          grid-area: card2;
        }
    }
    .card-style{
      box-shadow:0 10px 29px 0 rgb(80 100 144 / 30%);
      border-radius: .35rem!important;
      box-sizing: border-box;
      transition: all 0.5s ease-in-out;
    }
   .card-style:hover{
      box-shadow:0 10px 40px 0 rgb(80 98 138 / 130%); 
   }
   .info-container{
    display:grid;
    grid-template-columns: 1fr 1fr;
    .main-img{
        position:relative;
        right: 40px;
        width: 100%;
    }
    .title{
        text-align: center;
        align-self: center;
        color: var(--darkBlue);
        .main-title{
            margin-bottom: 1em;
            letter-spacing: 15px;
        }
    }
   }
   .second-img{
    width: 100%;
    height: 350px;
    object-fit: cover;
    padding: 2em 0;
    }
   .icons-container{
       padding: 1em 0;
       display:grid;
       grid-template-columns: 1fr 1fr 1fr;
       grid-column-gap: 2em;
       text-align: left;
       .item-icon{
           background: var(--gray);
           padding: 1em;
           text-align: justify;
        .subtitle{
            font-size: 1em;
            padding: 1em 0;
            color: var(--darkBlue);
            display:inline-flex;
            width: 100%;
            height: 100px;
            h3{
                padding-left: .5em;
                margin: 0;
            }
            i{
                font-size: 42px;
            }
        }
       }
   }
`;

export default function Contact () {
  useEffect (() => {
    Aos.init ({duration: 1400});
    window.scrollTo (0, 0);
  }, []);
  return (
    <div>
      <AboutStyled>
        <Wrapper>
          <div>
            <div className="info-container pb-4 mb-5">
              <img
                src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="main-img"
                className="main-img shadow p-3 mb-5 bg-white rounded"
              />
              <div className="title">
                <h1 className="main-title">ABOUT US</h1>
                <h3>
                  "With a history of 25 years we stand out in the market, providing clear and fast solutions to our clients"
                </h3>
                <Link className="btn btn-primary mt-3" activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
                  More info!
               </Link>
              </div>
            </div>
           
            <img
              src="https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
              alt="second-img"
              className="second-img"
              id="section1"
            />
            <div className="icons-container" >

              <div className="item-icon" data-aos="flip-right">
                <div>
                  <div className="subtitle">
                    <i className="fas fa-building" />
                    <h3>
                      FAST SERVICE
                    </h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores nobis incidunt, nisi nihil ad nostrum dolore eligendi esse, explicabo porro voluptatem tenetur repudiandae soluta quasi sed, qui reprehenderit unde repellat.
                  </p>
                </div>
              </div>
              <div className="item-icon" data-aos="flip-right">
                <div>
                  <div className="subtitle">
                    <i className="fas fa-laptop-house" />
                    <h3>
                      SECURITY COMPANY
                    </h3>
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempora veniam laudantium nihil fuga labore, explicabo expedita, facere amet optio voluptatibus debitis quibusdam sapiente maiores magnam perferendis praesentium? Et, eaque?
                  </p>
                </div>
              </div>
              <div className="item-icon" data-aos="flip-right">
                <div>
                  <div className="subtitle">
                    <i className="fas fa-briefcase" />
                    <h3>
                      THE BEST IN THIS SECTOR
                    </h3>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sunt iure. Optio iure sunt modi aliquam voluptatum fugiat laborum, doloribus similique voluptates, harum molestiae, animi adipisci nesciunt assumenda quis qui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </AboutStyled>
    </div>
  );
}
