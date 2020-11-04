import React from 'react';
import Modal from 'react-modal';
import './styles/login.css';
import {useLoading, BallTriangle} from '@agney/react-loading';

export default function Login (props) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      box: '3px 5px 5px #afaca',
      width: '50%',
      height: '480px',
      padding: '0',
      background: 'linear-gradient(90deg, rgba(54,24,99,1) 11%, rgba(45,12,93,1) 34%, rgba(54,33,103,1) 54%, rgba(46,24,112,1) 64%, rgba(44,24,111,1) 77%, rgba(46,30,107,1) 90%, rgba(59,41,135,1) 100%)',
    },
  };
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    isLoading,
  } = props;

  const {containerProps, indicatorEl} = useLoading ({
    loading: true,
    indicator: <BallTriangle width="70" />,
  });

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <div className="modal-container">
        <button className="button-close" onClick={props.closeModal}>
          {' '}X
        </button>
        {hasAccount
          ? <div className="imgAccount">
              <img
                src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
                alt="acc"
              />
              <h3>Member Login</h3>
            </div>
          : <div className="imgAccount">
              <img
                src="https://res.cloudinary.com/matiaskaufman/image/upload/v1603996863/4964052-512_5_nqacxq.png"
                alt="acc"
              />
              <h3>Create Account</h3>
            </div>}
        {isLoading
          ? <section className="loading" {...containerProps}>
              {indicatorEl}
            </section>
          : <div>
              <div className="username">
                <label>Username: </label>
                <input
                  type="text"
                  autoFocus
                  required
                  value={email}
                  onChange={e => setEmail (e.target.value)}
                />
                <p className="errorMsg">
                  {emailError}
                </p>
              </div>
              <div className="password">
                <label>Password: </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword (e.target.value)}
                />
                <p className="errorMsg">
                  {passwordError}
                </p>
              </div>
              <div className="btn-container">
                {hasAccount
                  ? <div>
                      <button onClick={handleLogin}>
                        LOGIN
                        <span>
                          <img
                            src="https://res.cloudinary.com/matiaskaufman/image/upload/v1604370489/iconfinder-512_6_tql9rt.png"
                            alt="log"
                          />
                        </span>
                      </button>
                      <p>
                        Don't have an account?
                        {' '}
                        <span onClick={() => setHasAccount (!hasAccount)}>
                          Sign up
                        </span>
                      </p>
                    </div>
                  : <div>
                      <button onClick={handleSignup}>
                        SIGN UP
                        <span>
                          <img
                            src="https://res.cloudinary.com/matiaskaufman/image/upload/v1604370489/iconfinder-512_6_tql9rt.png"
                            alt="reg"
                          />
                        </span>
                      </button>
                      <p>
                        Have an account?
                        {' '}
                        <span onClick={() => setHasAccount (!hasAccount)}>
                          Sign in
                        </span>
                      </p>
                    </div>}
              </div>
            </div>}
      </div>
    </Modal>
  );
}
