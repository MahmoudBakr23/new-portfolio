import { AboutContainer, Heading, AboutWrapper } from './Styles/About.styled.js';
import Header from './Header.js';

const About = () => {
    return(
        <div>
        <AboutContainer>
            <AboutWrapper>
                <Heading>About Me</Heading>
            </AboutWrapper>
        </AboutContainer>
        <Header rightOrLeft={"left"} about={"active"} />
        </div>
    )
}

export default About;
