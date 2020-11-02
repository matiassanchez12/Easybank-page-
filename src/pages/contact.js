import React, {useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper';

const ContactStyled = styled.div`
  
  h1{ 
    color: var(--darkBlue);
  }
  h2{ 
    color: var(--darkBlue);
  }
  h3{ 
    color: var(--darkBlue);
  }
  .main-img{
    background: url("https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80") top no-repeat;
    background-size: 100% 480px;
    height: 350px;
    padding: 5em;
    margin: 0 -130px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: var(--darkBlue);
    h1{
      font-size: 3em;
    }
    p{
      font-size: 2em;
    }
  }
  .info-container{
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 3em;
    .ubication{
      justify-self: center;
    }
  }
  iframe{
    padding:2em 0;
    width: 100%;
  }
  .form-container{
    background: var(--lightGray);
    margin: 0 -130px;
    padding: 2em 130px;
    display:flex;
    flex-direction: column;
    button{
        padding: .8em 4em;
        border: 0;
        border-radius: 80px;
        color: white;
        background: #c7a5a5;
        transition: 0.7s ease-out;
        cursor:pointer;
        position: relative;
        left: 23%;
        font-size: 1.2em;
      }
      button:hover{
        background: #a98c8c;
      }
    form{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1.5em;
      justify-items: center;
      padding: 3.3em 0;
      background: hsl(233deg 25% 58%);
      border-radius: 5px;
      justify-items: end;
    }
    .item-form{
      display: flex;
      flex-direction: column;
      width: 80%;
      label{
        color: white;
        margin-bottom: .5em;
      }
      input{
        width: 80%;
        height: 20px;
      }
      .comment-input{
        width:200%;
        height:80px;
      }
    }
  }
`;
export default function Contact () {
  useEffect (() => {
    window.scrollTo (0, 0);
  });
  return (
    <ContactStyled>
      <Wrapper>
        <div>
          <div className="main-img">
            <h1>Contact</h1>
            <h2>We have the best comunicator team, for help u right now!</h2>
          </div>
          <div className="info-container">
            <div className="contact-info">
              <h1>
                Choice we service!
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, culpa? Doloribus nobis, ea maxime velit ad dicta asperiores consectetur pariatur in deleniti illo dolore, itaque expedita rerum odit omnis perferendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, culpa? Doloribus nobis, ea maxime velit ad dicta asperiores consectetur pariatur in deleniti illo dolore, itaque expedita rerum odit omnis perferendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, culpa? Doloribus nobis, ea maxime velit ad dicta asperiores consectetur pariatur in deleniti illo dolore, itaque expedita rerum odit omnis perferendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, culpa? Doloribus nobis, ea maxime velit ad dicta asperiores consectetur pariatur in deleniti illo dolore, itaque expedita rerum odit omnis perferendis!
              </p>
            </div>
            <div className="ubication">
              <h3>Main Office</h3>
              <p>8888 Fake street Center</p>
              <p>Oklahoma, CO 22222</p>
              <h3>Direct Contact</h3>
              <p>Phone: 1111111111</p>
              <p>Toll free: 2322323232</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
          <iframe
            width="520"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginweight="0"
            marginWidth="0"
            id="gmap_canvas"
            title="googleMap"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Monte%20Grande+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
          <div className="form-container">
            <h1>Contact Us Now!</h1>
            <h2>Your Information</h2>
            <form>
              <div className="item-form">
                <label>First Name*</label>
                <input type="text" name="firstName" />
              </div>
              <div className="item-form">
                <label>Last Name*</label>
                <input type="text" name="lastname" />
              </div>
              <div className="item-form">
                <label>Job Title*</label>
                <input type="text" name="jobtitle" />
              </div>
              <div className="item-form">
                <label>Phone Number*</label>
                <input type="text" name="phone" />
              </div>
              <div className="item-form">
                <label>Email*</label>
                <input type="text" name="email" />
              </div>
              <div className="item-form">
                <label>State</label>
                <input type="text" name="state" />
              </div>
              <div className="item-form">
                <label>Comments</label>
                <input type="text" name="comments" className="comment-input" />
              </div>
              <div className="item-form" />
              <button>
                Send!
              </button>
            </form>

          </div>
        </div>
      </Wrapper>
    </ContactStyled>
  );
}
