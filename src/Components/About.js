import {Heading, AboutWrapper, SecondWrapper, AboutImg } from './Styles/About.styled.js';
import { Container, SubHeading, LinesCont, OneLine } from './Styles/Home.styled.js';
import Header from './Header.js';

const About = () => {
    return(
        <div>
        <Container>
            <SecondWrapper>
                <AboutImg />
            </SecondWrapper>
            <AboutWrapper>
                <Heading>ABOUT ME</Heading>
                <SubHeading tight wid={"400px"}>
                    Hi, My name is Mahmoud Bakr and I am a 23 years old full stack developer who will knock you out of your pants by amazingry developer who will knock you out of your pants by amazingry developer who will knock you out of your pants by amazingry developer who will knock you out
                </SubHeading>
            </AboutWrapper>
            <LinesCont short>
                <OneLine />
                <OneLine />
                <OneLine />
                <OneLine />
                <OneLine />
            </LinesCont>
        <Header rightOrLeft={"left"} about={"active"} />
        </Container>
        </div>
    )
}

export default About;
