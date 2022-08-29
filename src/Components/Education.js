import Header from "./Header";
import { AboutImg, Heading, SecondWrapper, AboutWrapper } from "./Styles/About.styled";
import { Container, LinesCont, OneLine } from "./Styles/Home.styled";

const Education = () => {
    return(
        <div>
            <Container right>
            <AboutWrapper>
                <Heading>EDUCATION</Heading>
            </AboutWrapper>
            <SecondWrapper>
                <AboutImg />
            </SecondWrapper>
            <LinesCont short>
                <OneLine />
                <OneLine />
                <OneLine />
                <OneLine />
                <OneLine />
            </LinesCont>
            <Header rightOrLeft={"right"} edu={"active"}/>
            </Container>
        </div>
    )
}

export default Education;
