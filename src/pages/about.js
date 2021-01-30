import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import parse from 'html-react-parser';
import SEO from '../components/seo';
import { aboutPageQuery } from '../queries/aboutPageQuery';

const about = () => {
  const data = aboutPageQuery();

  return (
    <>
      <Wrapper>
        <SEO title="About" />
        <Introduction>
          <p>
            Stacey Rozich is an <strong>artist, illustrator</strong> and
            <strong> muralist.</strong> She constructs vignettes in watercolor
            that combine elements of folklore, medieval religious iconography
            and American pop culture. Her storybook world is brought to life
            through lush patterning, symbolism, and nostalgia. She was born in
            Seattle and now resides in Los Angeles, California.
          </p>
        </Introduction>
        <GridContainer>
          <GatsbyImage
            image={data.portrait1.childImageSharp.gatsbyImageData}
            className="portrait"
            alt="Portrait of Stacey"
          />
          <div>
            <Contact className="contact">
              <div className="birdWrapper">
                <GatsbyImage
                  image={data.bird.childImageSharp.gatsbyImageData}
                  alt="Bird"
                  className="bird"
                />
              </div>
              <div>
                <a href="mailto: staceyrozich@gmail.com">
                  staceyrozich@gmail.com
                </a>
                <p>
                  Availiable for commercial illustration, murals, and sometimes
                  personal commissions.
                </p>
              </div>
            </Contact>
            <ClientList className="clientList">
              <h4>COMMERCIAL CLIENT LIST</h4>
              <p>
                The New Yorker, Starbucks, Playbox Magazine, Refinery29, Lucky
                Peach Magazine, Red Bull Music Academy, The Museum of Pop
                Culture (MoPOP), The Stranger, Sub Pop Records, and many more.{' '}
              </p>
            </ClientList>
          </div>
          <GatsbyImage
            image={data.portrait2.childImageSharp.gatsbyImageData}
            className="portrait"
            alt="Portrait of Stacey"
          />

          <SelectedInterviews className="interviews">
            <h4>SELECTED INTERVIEWS AND FEATURES</h4>
            <div>
              {data.interviews.edges.map(post => (
                <a href={post.node.Interviews.hyperlink} target="blank">
                  <div className="blogButton">
                    {parse(post.node.title)}
                    <GatsbyImage
                      image={data.arrow.childImageSharp.gatsbyImageData}
                      className="arrow"
                      alt="arrow"
                    />
                    <GatsbyImage
                      image={data.arrowPink.childImageSharp.gatsbyImageData}
                      className="arrowPink"
                      alt="arrow"
                    />
                  </div>
                </a>
              ))}
            </div>
          </SelectedInterviews>
          <Elsewhere className="elsewhere">
            <h4>ELSEWHERE</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/staceyrozich/?hl=en"
                  target="blank"
                >
                  instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Staceyrozich" target="blank">
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/staceyrozich?lang=en"
                  target="blank"
                >
                  twitter
                </a>
              </li>
            </ul>
          </Elsewhere>
        </GridContainer>
      </Wrapper>
    </>
  );
};

export default about;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  letter-spacing: 1.35px;
  transform: translateY(-130px);
`;

const Introduction = styled.div`
  display: flex;
  background-color: var(--primary);
  justify-content: center;
  width: 100vw;
  p {
    margin: 200px 0;
    font-size: var(--largeText);
    font-weight: var(--fontWeigthThin);
    width: 75vw;
  }
  strong {
    font-weight: var(--fontWeightBold);
  }
  @media only screen and (max-width: 950px) {
    p {
      margin: 150px 0;
    }
  }
  @media only screen and (max-width: 650px) {
    p {
      margin: 125px 0;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  gap: 1.5rem 2.5rem;
  grid-template-columns: 0.75fr 1fr;
  grid-template-rows: auto;
  margin-top: -150px;
  width: 85vw;
  h4 {
    color: var(--black);
    border-bottom: 3px solid var(--primary);
    display: inline-block;
    padding-bottom: 4px;
    font-size: var(--smallText);
    font-weight: var(--fontWeightBold);
    margin-bottom: 25px;
  }
  .portrait {
    min-width: 375px;
    max-width: 600px;
  }
  @media only screen and (max-width: 950px) {
    display: flex;
    margin-top: -100px;
    width: 90vw;

    flex-direction: column;
    .portrait {
      align-self: center;
    }
    .contact {
      margin-top: 10px;
      margin-left: auto;
      margin-right: auto;
      padding: 0;
    }
    .clientList {
      margin-top: -30px;
      margin-bottom: 20px;
    }
    .interviews {
      margin-top: 0px;
    }
    .elsewhere {
      margin-top: 0px;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  padding: 1rem 0 3rem 0;
  max-width: 450px;
  a {
    font-size: var(--mediumText);
    font-weight: bold;
    border-bottom: 3px solid;
    padding-bottom: 4px;
    :hover {
      color: var(--secondary);
      border-bottom: 3px solid var(--secondary);
      transition: 0.5s ease;
    }
  }
  .birdWrapper {
    width: 50px;
    margin-right: 15px;
  }
  .bird {
    object-fit: cover;
  }
  p {
    margin-top: 15px;
    font-size: var(--tinyText);
  }
`;

const ClientList = styled.div`
  p {
    padding: 0;
    margin: 0;
    font-size: var(--mediumText);
    font-weight: var(--fontWeigthThin);
  }
`;

const SelectedInterviews = styled.div`
  margin-top: -50px;
  margin-bottom: 40px;
  .arrow,
  .arrowPink {
    width: 20px;
    margin-left: 4px;
    display: inline-block;
    transform: translateY(2px);
  }
  .arrowPink {
    display: none;
  }
  .blogButton {
    align-items: center;
    border-radius: 50px;
    background-color: var(--primary);
    display: inline-block;
    font-size: var(--mediumSmallText);
    font-weight: var(--fontWeigthThin);
    margin: 5px;
    padding: 10px 20px;
    :hover {
      background-color: var(--black);
      color: var(--primary);
      .arrow {
        display: none;
      }
      .arrowPink {
        display: inline-block;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .blogButton {
      font-size: 0.7rem;
    }
    .arrow,
    .arrowPink {
      width: 15px;
    }
  }
`;

const Elsewhere = styled.div`
  margin-top: -95px;
  grid-column-start: 2;
  a {
    font-size: var(--mediumText);
    font-weight: var(--fontWeigthThin);
    :hover {
      border-color: var(--secondary);
      border-bottom: 2px solid var(--primary);
      text-decoration: none;
    }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
`;
