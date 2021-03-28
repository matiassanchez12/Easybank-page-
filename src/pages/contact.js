import React, { useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../components/wrapper";
import emailjs from 'emailjs-com';

const ContactStyled = styled.div`
  h1 {
    color: var(--darkBlue);
  }
  h2 {
    color: var(--darkBlue);
  }
  h3 {
    color: var(--darkBlue);
  }
  .main-img {
    background: url("https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")
      top no-repeat;
    background-size: 100% 480px;
    height: 350px;
    padding: 5em;
    margin: 0 -130px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: var(--darkBlue);
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 2em;
      letter-spacing: 2em;
    }
  }
  .info-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 3em;
    .ubication {
      justify-self: center;
    }
    .contact-info{
      border: 2px solid #ff826b;
      padding: 17px;
      border-radius: 20px;
    }
  }
  iframe {
    padding: 2em 0;
    width: 100%;
  }
  .form-container {
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
    margin: 0 -130px;
    padding: 2em 130px;
    display: flex;
    flex-direction: column;
    form{
      color:white;
      margin: 0 200px;
    }
  }
`;
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'youtube_template', e.target, 'user_2le8hSeLDMHWpceRWQpZK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <ContactStyled>
      <Wrapper>
        <div>
          <div className="main-img">
          </div>
          <div className="info-container">
            <div className="contact-info">
              <h1>Choice we service!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                culpa? Doloribus nobis, ea maxime velit ad dicta asperiores
                consectetur pariatur in deleniti illo dolore, itaque expedita
                rerum odit omnis perferendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                culpa? Doloribus nobis, ea maxime velit ad dicta asperiores
                consectetur pariatur in deleniti illo dolore, itaque expedita
                rerum odit omnis perferendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                culpa? Doloribus nobis, ea maxime velit ad dicta asperiores
                consectetur pariatur in deleniti illo dolore, itaque expedita
                rerum odit omnis perferendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                culpa? Doloribus nobis, ea maxime velit ad dicta asperiores
                consectetur pariatur in deleniti illo dolore, itaque expedita
                rerum odit omnis perferendis!
              </p>
            </div>
            <div className="ubication">
              <h3>Main Office</h3>
              <p>8888 Fake street Center</p>
              <p className="border-bottom border-secondary mb-3 pb-3">Oklahoma, CO 22222</p>
              <h3>Direct Contact</h3>
              <p>Phone: 1111111111</p>
              <p>Toll free: 2322323232</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
          <iframe
            className="mt-5 mb-5"
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
            <form onSubmit={sendEmail}>
              <h1 className="mx-auto text-white">Contact Us Now!</h1>
              <p>Please complete this form for contact us...</p>
              <input type="text" style={{display: "none"}} name="subject" defaultValue="Mail de consulta - Hospital"></input>
              <div className="form-group pt-3">
                <label className="font-weight-bold" for="exampleFormControlInput1">Name*</label>
                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name Lastname" />
              </div>
              <div className="form-group">
                <label className="font-weight-bold" for="exampleFormControlInput1">Email address*</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label className="font-weight-bold" for="exampleFormControlTextarea1">Message*</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message..."></textarea>
              </div>
              <div className="text-center mt-5 mb-5">
                <button type="submit" className="btn btn-primary btn-block text-white shadow-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </ContactStyled>
  );
}
