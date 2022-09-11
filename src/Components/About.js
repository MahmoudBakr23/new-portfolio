import {Heading, AboutWrapper, SecondWrapper, AboutImg } from './Styles/About.styled.js';
import { Container, SubHeading, LinesCont, OneLine } from './Styles/Home.styled.js';
import aboutImg from '../aboutme.png';
import Header from './Header.js';

const About = () => {
    return(
        <div>
        <Container smpadd={"4rem 0"} vh={"100vh"} pos={"fixed"} middir={"column-reverse"}>
            <SecondWrapper hght={"100%"} mar={"7rem 0 0 8rem"} smmar={"0"}>
                <AboutImg img={`url(${aboutImg})`} wid={"500px"} hght={"200px"} smwid={"300px"} smhg={"120px"} mdwid={"400px"} mdhg={"150px"}  />
            </SecondWrapper>
            <AboutWrapper>
                <Heading smmar={"2rem 0 0 0"} >ABOUT ME</Heading>
                <SubHeading tight size={"1rem"}>
                    Hello!👋
                    My name is Mahmoud, and I'm a 23 years old full stack developer who is highly skilled and experienced in Ruby on Rails and React frameworks, problem solving, and ready to take your ideas out to the world!<span style={{display: 'hidden'}}>Making people's lives easier is a concern, but mine is a priority.</span>
                </SubHeading>
            </AboutWrapper>
            <LinesCont mar={"0 6rem"} hght={"35%"} right={"0"} top={"0"} mdmar={"0 3rem"} mdhght={"25%"} mdright={"0"} mdtop={"0"} >
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
