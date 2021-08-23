import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/my-skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container} id="timeline">
        <Thumbnail>
          <img src={dev} alt="I’m Parul and I’m a MERN stack engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Timeline</h1>
          <div className="p-container">
            <p>
              I enjoy keeping this personal timeline up to date. It highlights some of the important moments from my
              life each year.
            </p>
            <h5>2021</h5>
            <p>1. Started working with a UK based travel company <a href="https://tripabrood.com/">TripAbrood</a> as a Backend Developer.
            </p>
            <p>
              2. Worked with an Indian startup <a href="https://khatabook.com/">Khatabook</a> as a Backend NodeJs developer.
            </p>
            <p>
              2.
            </p>
            <h5>2020</h5>
            <p>
              1. Joined <a href="https://geekyants.com/">GeekyAnts</a> as a Full Stack Developer.
            </p>
            <p>
              2. Built a website to analyze the <a href="https://github.com/malhotra-parul/schools-connectivity-data-viz-react">connectivity of schools across Bangalore</a>, on the basis of parameters like connectivity with bus routes using openCity dataset. Visualization done using React. Backend built using MongoDb.
            </p>
            <p>
              3. Built a <a href="https://dashboard-in-react.vercel.app/">dashboard</a> in React.
            </p>
            <p>
              4. 🐦 Built a{' '}
              <a href="https://documenter.getpostman.com/view/7194332/T17DiA1C?version=latest">twitter clone</a> backend
              using express and firebase functions.
            </p>
            <p>
              5. 💬 Built a <a href="https://devslack-be53b.web.app/">slack clone in React.</a>
            </p>
            <p>
              6. An article I wrote for <a href="https://medium.com/p/99432310d476">Better Programming</a> received 21k
              views.
            </p>
            <p>
              7. 💻 Built a <a href="https://codeplayground.netlify.app/">coding playground in React</a> for a kids
              bootcamp.
            </p>
            <h5>2019</h5>
            <p>1. Joined an online bootcamp to pursue my interest in development.</p>
            <p>
              2. Joined <em>Milkbasket.com</em> as an SDET.
            </p>
          </div>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
