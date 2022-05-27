import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import stars from "../assets/images/stars.png"
import logo from "../assets/images/houston-react-developers-logo.png"

const Hero = () => {
  return (
    <Wrapper className="d-flex align-items-center">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center">
          <img
            src={logo}
            alt="Houston React Developers Logo"
            width={350}
            height={350}
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-xs-5 mt-5 mt-lg-0 info container d-flex flex-column justify-content-between">
          <h1>
            <span>Houston</span>
            <br />
            React Developers
          </h1>
          <h4>ALL SKILL LEVELS WELCOME</h4>
          <div className="info-p">
            <p>
              If you have a love for anything ReactJS, then join the Houston
              React Developers group along with other like-minded individuals
              every month for some great presentations.
            </p>
          </div>
          <div className="btn">
            <Link to="">
              <button>NEXT EVENT</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #1e1f1e;
  background-image: url(${stars});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  min-height: calc(100vh - 7rem);
  h1 {
    text-align: center;
  }
  h1 span {
    color: #cb1f30;
    font-size: 5.2rem;
    padding: 0;
    line-height: 32px;
  }
  h4 {
    margin-top: 20px;
    font-weight: 100;
    text-align: center;
    color: #eee;
  }
  .info {
    width: 65%;
    margin-bottom: 20px;
  }
  .info-p {
    text-align: center;
    margin-top: 20px;
  }

  @media screen and (min-width: 992px) {
    .info {
      width: 50%;
    }
    .info-p {
      margin: 20px 0;
    }
    .info p {
      width: 75%;
      margin: 0 auto;
      text-align: center;
    }
  }
  button {
    background-color: transparent;
    color: #00c4cc;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 150px;
    text-align: center;
    transition: 1s;
  }
  button:hover {
    color: #cb1f30;
    font-weight: bold;
    background-color: #fff;
    transition: 1s;
  }
`

export default Hero
