import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/wrapper';

const ContactStyled = styled.div`
  padding-bottom: 5em;
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
    padding: 3em 0;
    .ubication{
      justify-self: center;
    }
  }
  .form-container{
    form{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 1.5em;
    }
  }
`;
export default function Contact () {
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
          <div className="form-container">
            <h1>Contact Us Now!</h1>
            <h2>Your Information</h2>
            <form>
              <div className="item-form">
                <label>First Name</label>
                <input type="text" name="firstName" />
              </div>
              <div className="item-form">
                <label>First Name</label>
                <input type="text" name="firstName" />
              </div>
              <div className="item-form">
                <label>First Name</label>
                <input type="text" name="firstName" />
              </div>
              <div className="item-form">
                <label>First Name</label>
                <input type="text" name="firstName" />
              </div>
              <div className="item-form">
                <label>First Name</label>
                <input type="text" name="firstName" />
              </div>
              <div className="item-form">
                <label>First Name</label>
                <input type="text" name="firstName" />
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </ContactStyled>
  );
}
