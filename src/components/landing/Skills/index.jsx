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
            <h5>2020</h5>
            <p>
              1. Built an Oauth app using <a href="https://github.com/malhotra-parul/github-users-app">Github</a>.
            </p>
            <p>
              2. Built a <a href="https://dashboard-in-react.vercel.app/">dashboard</a> in React.
            </p>
            <p>
              3. 🐦 Built a{' '}
              <a href="https://documenter.getpostman.com/view/7194332/T17DiA1C?version=latest">twitter clone</a> backend
              using express and firebase functions.
            </p>
            <p>
              4. 💬 Built a <a href="https://devslack-be53b.web.app/">slack clone in React.</a>
            </p>
            <p>
              5. An article I wrote for <a href="https://medium.com/p/99432310d476">Better Programming</a> received 21k
              views.
            </p>
            <p>
              6. 💻 Built a <a href="https://codeplayground.netlify.app/">coding playground in React</a> for a kids
              bootcamp.
            </p>
            <h5>2019</h5>
            <p>7. Joined an online bootcamp to pursue my interest in development.</p>
            <p>
              8. Joined <em>Milkbasket.com</em> as an SDET - 2.
            </p>
            <h5>2016-2018</h5>
            <p>9. Pursued entreprenurship.</p>
            <h5>2014</h5>
            <p>
              10. Joined <em>Makemytrip.com</em> as a QA Analyst.
            </p>
            <h5>2011</h5>
            <p>
              11. Joined <em>Tata Consultancy Services</em> as a Software Engineer.
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
