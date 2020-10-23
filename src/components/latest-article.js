import React, {useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Aos from 'aos';
import 'aos/dist/aos.css';

const LastestArticleStyled = styled.div`
    padding: 5em 0;
    h1{
        text-align: center;
        color: var(--darkBlue);
        font-size: 2.5em;
        font-weight: 300;
        margin-bottom: 1em;
    }
    .grid-container{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-row-gap: 1.5em;
    }
    .grid-item{
        margin-top: 1.5em;
        img{
            height: 200px;
            width: 100%;
            object-fit: cover;
            border-radius: 12px 12px 0 0;
        }
        h3{
            font-size: 1em;
            font-weight: 300;
            margin-top:.7em;
            color: var(--darkBlue);
        }
        p{
            line-height: 1.7;
            font-size: .9em;
        }
        .grid-info{
            margin: 1.4em 1.8em;
        }
    }
  @media screen and (min-width: 1024px){
      background: var(--lightGray);
      h1{
        text-align: start;
      }
      .grid-container{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 2em;
        .grid-item{
           background: var(--white);
            .grid-info{
               margin: 1.4em 1em;
                     }
           }
    }
  }
`;

export default function LatestArticle () {
  useEffect (() => {
    Aos.init ({duration: 1300});
  }, []);
  return (
    <LastestArticleStyled>
      <Wrapper>
        <h1>Latest Articles</h1>
        <div className="grid-container">
          <div className="grid-item" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815699/img/image-currency_oxb0kv.jpg"
              alt="curre"
            />
            <div className="grid-info">
              <small>By Claire Robinson</small>
              <h3>Receive money in any currency with no fees</h3>
              <p>
                {' '}
                The world is getting smaller and we’re becoming more mobile. So why should you be
                forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="grid-item" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815694/img/image-restaurant_gqznpv.jpg"
              alt="rest"
            />
            <div className="grid-info">
              <small>By Wilson Hutton</small>
              <h3>Treat yourself without worrying about money</h3>
              <p>
                Our simple budgeting feature allows you to separate out your spending and set
                realistic limits each month. That means you …
              </p>
            </div>
          </div> <div className="grid-item" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815694/img/image-plane_pvramh.jpg"
              alt="plane"
            />
            <div className="grid-info">
              <small>By Wilson Hutton</small>
              <h3>Take your Easybank card wherever you go</h3>
              <p>
                We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div> <div className="grid-item" data-aos="fade-left">
            <img
              src="https://res.cloudinary.com/matiaskaufman/image/upload/v1602815701/img/image-confetti_qydwmi.jpg"
              alt="rare"
            />
            <div className="grid-info">
              <small>By Claire Robinson</small>
              <h3>Our invite-only Beta accounts are now live!</h3>
              <p>
                After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                It’s easy to request an invite through the site ...
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </LastestArticleStyled>
  );
}
