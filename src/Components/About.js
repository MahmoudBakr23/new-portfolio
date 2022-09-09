import {Heading, AboutWrapper, SecondWrapper, AboutImg } from './Styles/About.styled.js';
import { Container, SubHeading, LinesCont, OneLine } from './Styles/Home.styled.js';
import aboutImg from '../aboutme.png';
import Header from './Header.js';

const About = () => {
    return(
        <div>
        <Container smpadd={"4rem 0"} vh={"100vh"} pos={"fixed"} >
            <SecondWrapper hght={"100%"} mar={"7rem 0 0 8rem"} smmar={"0"}>
                <AboutImg img={`url(${aboutImg})`} wid={"500px"} hght={"200px"} smwid={"300px"} smhg={"120px"} mdwid={"400px"} mdhg={"150px"}  />
            </SecondWrapper>
            <AboutWrapper>
                <Heading smmar={"2rem 0 0 0"} >ABOUT ME</Heading>
                <SubHeading tight size={"1rem"}>
                    Hi, My name is Mahmoud Bakr and I am a 23 years old full stack developer who will knock you out of your pants by amazingry developer who will knock you out of your pants by amazingry developer who will knock you out of your pants by amazingry developer who will knock you out
                </SubHeading>
            </AboutWrapper>
            <LinesCont mar={"0 6rem"} hght={"35%"} right={"0"} top={"0"}>
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
