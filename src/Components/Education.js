import Header from "./Header";
import { AboutImg, Heading, SecondWrapper } from "./Styles/About.styled";
import { Container, LinesCont, OneLine } from "./Styles/Home.styled";
import { College, EducationItem, EducationWrapper, Time, University } from './Styles/Education.styled';
import eduImg from '../edu.png';

const Education = () => {
    return(
        <div>
            <Container right>
            <EducationWrapper>
                <Heading>EDUCATION</Heading>
                <EducationItem>
                    <Time>dasdhjkasdlk</Time>
                    <University>daksjdlaksj</University>
                    <College>dkalsjdlkasdj</College>
                </EducationItem>
                <EducationItem>
                    <Time>dasdhjkasdlk</Time>
                    <University>daksjdlaksj</University>
                    <College>dkalsjdlkasdj</College>
                </EducationItem>
                <EducationItem>
                    <Time>dasdhjkasdlk</Time>
                    <University>daksjdlaksj</University>
                    <College>dkalsjdlkasdj</College>
                </EducationItem>
            </EducationWrapper>
            <SecondWrapper hght={"none"} mar={"7rem 4rem 0 0"}>
                <AboutImg img={`url(${eduImg})`} wid={"500px"} hght={"300px"} />
            </SecondWrapper>
            <LinesCont mar={"0 6rem"} hght={"25%"} right={"100"}>
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
