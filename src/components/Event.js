import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Event = () => {
  return (
    <Wrapper>
      <section className="next-event">
        <div className="section-center no-gutters d-flex column justify-content-around">
          <article className="event-info">
            <StaticImage
              src="../assets/images/cam-beaudoin.png"
              className="hero-photo present-photo"
              alt="Cam Beaudoin"
            />
          </article>
          <article className="event-img">
            <StaticImage
              src="../assets/images/cam-beaudoin.png"
              className="hero-photo present-photo"
              alt="Cam Beaudoin"
            />
          </article>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  section {
    padding: 5rem 0;
  }

  // .next-event {
  //   border: 1px solid blue;
  //   width: 90%;
  //   margin: 0 auto;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }

  .event-img {
    position: relative;
  }

  .event-info {
    align-self: center;
  }

  .hero-photo {
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }

  .present-photo {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  }

  min-height: calc(100vh - 7rem);
  h2 {
    color: #cb1f30;
    margin-bottom: 3rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
  }
  h3 span {
    text-transform: uppercase;
  }
`

export default Event
