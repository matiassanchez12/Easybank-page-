import React, {useEffect} from 'react';

import styled from 'styled-components';
import Wrapper from '../components/wrapper';

const BlogStyled = styled.div`
    .carousel-container{
      padding: 2em 0;
    }
    .img-item{
      position:relative;
      .text-img{
        position:absolute;
        color: black;
        background: #8BC34A;
        top: 60%;
        right: 30%;
        padding: 1em;
        font-size: .9em;
        text-align: center;
        opacity: .9;
        border-radius: 20px;
        button{
          color: white;
          background: #966c5dde;
          padding:.3em .5em;
          border: none;
          font-size: 1.2em;
          border-radius:6px;
          cursor:pointer;
        }
      }
      }
      .blogs-title{
        text-align: center;
        color: var(--darkBlue);
        padding-bottom: 1em; 
        border-bottom: 1px solid gray;
      }
      .post-container{
        background: var(--gray);
        padding: 5em 10em;
        margin: 0 -160px;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 2em;
        grid-row-gap: 2em;
        .post-item{
          position: relative;
          cursor: pointer;
          background:#ddf1ea;
          img{
            width: 100%;
            height: 300px;
            object-fit: cover;
            opacity: 0.7;
            transition: 0.7s ease-out;
          }
          h2{
            position: absolute;
            top: 60%;
            background: #736e6e;
            padding: .8em 3.8em;
            width: 160px;
            opacity: .8;
            color: white;
            text-align: center;
            transition: 0.7s ease-out;
            margin-top: -35px;
          }
          p{
            margin: 1em;
          }
        }
        .post-item:hover{
          img{
            opacity: 1;
          }
          h2{
            opacity: 0.9;
          }
        }
      }
`;

export default function Contact () {
  useEffect (() => {
    window.scrollTo (0, 0);
  });
  return (
    <BlogStyled>
      <Wrapper>
        <div className="carousel-container">
        </div>

        <h1 className="blogs-title">-Blog Section-</h1>
        <p>Mostrar un candado si no hay un usuario logeado con un mensaje de que es necesario loguearse para 
        ver los blogs</p>
        <p>Hacer un ABM de post- Colocar un buton en la parte de abajo con la opcion de agregarun nuevo post</p>

        <div className="post-container">
          <div className="post-item">
            <img
              src="https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="img-post-1"
            />
            <h2>Post1</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi alias voluptatum ipsum voluptas iusto ut distinctio eos incidunt veritatis quasi, doloremque officia modi, blanditiis, asperiores nemo ipsam maiores possimus accusamus?
            </p>
          </div>
          <div className="post-item">
            <img
              src="https://images.unsplash.com/photo-1603536022807-ef8f002d1b2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=789&q=80"
              alt="img-post-1"
            />
            <h2>Post2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima labore ipsa ipsam, neque nemo provident consectetur voluptatum, iste eum nesciunt quas nam facilis animi! Optio quas recusandae eos exercitationem.
            </p>
          </div>
          <div className="post-item">
            <img
              src="https://images.unsplash.com/photo-1599030048493-c1a9e7ba1ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80"
              alt="img-post-2"
            />
            <h2>Post3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat eligendi deserunt inventore adipisci dolor aperiam explicabo mollitia molestias quod laboriosam, fuga, velit quas, reiciendis dicta nam officia sapiente beatae!
            </p>
          </div>
          <div className="post-item">
            <img
              src="https://images.unsplash.com/photo-1591029705828-93b295913a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
              alt="img-post-3"
            />
            <h2>Post4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a fugiat ad inventore voluptatem quae, voluptatibus fuga quod illo voluptatum, voluptate, nobis ipsam vero perferendis porro explicabo voluptas quia dignissimos!
            </p>
          </div>
          <div className="post-item">
            <img
              src="https://images.unsplash.com/photo-1603739198194-2af409843f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt="img-post-4"
            />
            <h2>Post5</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est magnam corporis nobis reprehenderit nihil quibusdam, saepe eaque maxime ipsum itaque animi perferendis obcaecati ea amet nam mollitia vitae quisquam consectetur?
            </p>
          </div>
          <div className="post-item">
            <img
              src="https://images.unsplash.com/photo-1603657524073-29d513dce10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=844&q=80"
              alt="img-post-5"
            />
            <h2>Post6</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet recusandae excepturi ad iure accusamus ex illum, laboriosam sit obcaecati ut. Ipsum, sequi beatae? Sint voluptates nisi nostrum itaque. Odit, explicabo.
            </p>
          </div>
        </div>
      </Wrapper>
    </BlogStyled>
  );
}
