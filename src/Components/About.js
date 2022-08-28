import { AboutContainer, Heading, AboutWrapper, SecondWrapper, AboutImg } from './Styles/About.styled.js';
import { Container, SubHeading } from './Styles/Home.styled.js';
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
                <SubHeading tight >
                    Hi, My name is Mahmoud Bakr and I am a 23 years old full stack developer who will knock you out of your pants by amazingry
                </SubHeading>
            </AboutWrapper>
        <Header rightOrLeft={"left"} about={"active"} />
        </Container>
        </div>
    )
}

export default About;
