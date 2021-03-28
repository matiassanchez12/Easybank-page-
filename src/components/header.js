import React, {useState} from 'react';
import styled from 'styled-components';
import {Slide} from 'react-awesome-reveal';
import Wrapper from './wrapper';
import {Link} from 'react-router-dom';

const HeaderStyled = styled.div`
    padding: 1em 0;
    align-items: center;
    position:fixed;
    width:100%;
    z-index: 3;
    top:0;
    background: white;
    .button-container{
      display:none;
    }
    .options-container{
      display:none;
    }
  .logo{
    background: url("https://res.cloudinary.com/matiaskaufman/image/upload/v1602815695/img/logo_ubkliy.svg") no-repeat center;
    width: 139px;
    display:block;
  }
  .header-container{
    font-family: 'Public Sans', sans-serif;
    display: flex;
    justify-content: space-between;
  }
    .icon-open{
      background: url("https://res.cloudinary.com/matiaskaufman/image/upload/v1602815695/img/icon-close_imqhjc.svg") no-repeat center;
      width: 40px;
      height: 40px;
      display:block;
    }
    .icon-close{
      background: url("https://res.cloudinary.com/matiaskaufman/image/upload/v1602815695/img/icon-hamburger_vgmicx.svg") no-repeat center;
      width: 40px;
      height: 40px;
      display:block;
    }
    .dropbox{
      ul{
        display:none;
      }
    }
    .dropbox-open{
      ul{
       position: fixed;
        left: 0;
        right: 0;
       padding-inline-start: 0;
       text-align: center;
        padding: 1em;
        left: 0;
       right: 0;
       height: 100vh;
        display:block;
        background:linear-gradient(to bottom, #2d324d 0%, transparent 90%);
        list-style: none;
        color: var(--darkBlue);
      }
    li{
      font-size: 1.1em;
      padding: .8em 1em;
      text-decoration: none;
      background:white;
    }
    li:first-of-type{
      border-radius: 12px 12px 0 0;
      padding-top: 2em
    }
    li:last-of-type{
      border-radius: 0 0 12px 12px;
      padding-bottom: 2em;
    }
    }
    button{
      display:none;
    }
    @media screen and (min-width: 1024px){
      .header-container{
        display:grid;
        grid-template-columns: 2fr 1fr 2fr;
        grid-template-areas: "logo options button";
      }
      .logo{
        grid-area: logo;
        cursor:pointer;
      }
      .icon-close{
        display:none;
      }
      .options-container{
        display:block;
        grid-area: options;
        ul{
        padding:0;
        display:flex;
        list-style: none;
        li{
          margin: 0 .9em;
          font-size: 1em;
          cursor:pointer;
          border-top: 2px solid transparent;
          border-bottom: 2px solid transparent;
          transition: 0.7s ease-out;
          a{
            text-decoration: none;
            color: inherit;
          }
        }
        li:hover{
          border-top: 2px solid coral;
          border-bottom: 2px solid coral;
        }
        }
        }
        button{
            grid-area: button;
            justify-self:end;
            display:block;
            border-radius: 180px;
            height: 100%;
            padding: 1em 2.6em;
            border: none;
            cursor: pointer;
            /* background: #d0c0ab;
            color: white; */
            box-shadow: 2px 2px 5px -1px #776262;
            transition: 0.7s ease-out;
            outline:none;
          }
      }
`;

export default function Header (props) {
  const [isOpenDropbox, setIsOpenDropbox] = useState (false);
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header-container">
          <Link to="/" className="logo" />
          <div className={isOpenDropbox ? 'dropbox-open' : 'dropbox'}>
            {isOpenDropbox
              ? <label
                  className="icon-open"
                  onClick={() => {
                    setIsOpenDropbox (!isOpenDropbox);
                  }}
                />
              : <label
                  className="icon-close"
                  onClick={() => {
                    setIsOpenDropbox (!isOpenDropbox);
                  }}
                />}
            <Slide>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </Slide>
          </div>
          <div className="options-container">
            <ul>
              <li className="link-style"><Link to="/">Home</Link></li>
              <li className="link-style"><Link to="/about">About</Link></li>
              <li className="link-style"><Link to="/contact">Contact</Link></li>
              <li className="link-style"><Link to="/blog">Blog</Link></li>
              <li className="link-style"><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          {props.isLogin
            ? <button className="btn btn-secondary" onClick={props.handleLogOut}>
                LOG OUT
              </button>
            : <button className= "btn btn-secondary" onClick={props.openModal}>
                SIGN IN
              </button>}
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}
