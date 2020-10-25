import React, {useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutStyled = styled.div`
   padding: 5em 0;
   .info-container{
       display: grid;
       grid-row-gap: 4em;
       grid-template-columns: 1fr 1fr;
       grid-template-areas: "img title"
                            "img title"
                            "text text";
    .main-img{
        position:relative;
        right: 40px;
        grid-area: img;
        width: 100%;
    }
    .title{
        text-align: center;
        grid-area: title;
        align-self: center;
        color: var(--darkBlue);
        .main-title{
            margin-bottom: 2em;
        }
    }
    .text-container{
        grid-area:text;
        display: flex;
        margin: 2em 5em;
        p{
            border-top: 1px solid #9464c1;
            border-bottom: 1px solid #9464c1;
            padding: 20px 0;
            margin: 0 1.8em;
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
        .subtitle{
            font-size: 1em;
            padding: 1em 0;
            color: var(--darkBlue);
            display:inline-flex;
            h3{
                padding-left: .5em;
                margin: 0;
            }
            i{
                font-size: 1.3em;
            }
        }
       }
   }
`;

export default function Contact () {
  useEffect (() => {
    Aos.init ({duration: 1400});
  }, []);
  return (
    <div>
      <AboutStyled>
        <Wrapper>
          <div>
            <div className="info-container">
              <img
                src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="main-img"
                className="main-img"
              />
              <div className="title">
                <h1 className="main-title">ABOUT</h1>
                <h1>
                  "Somos los mejores haciendo lo que hacemos. Porque? No hay porque"
                </h1>
              </div>
              <div className="text-container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, possimus id delectus, itaque commodi veritatis laborum soluta, sapiente dicta consectetur cum quisquam rem quasi iure! Minima suscipit sunt earum nam.
                  {' '}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere molestiae magni suscipit animi iure at facilis totam, error harum voluptatem ipsum eum veritatis reprehenderit non! Velit unde officiis facere!
                </p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549637642-90187f64f420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
              alt="second-img"
              className="second-img"
            />
            <div className="icons-container">

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
