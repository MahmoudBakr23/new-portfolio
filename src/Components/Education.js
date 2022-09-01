import Header from "./Header";
import { AboutImg, Heading, SecondWrapper } from "./Styles/About.styled";
import { Container, LinesCont, OneLine } from "./Styles/Home.styled";
import { College, EducationItem, EducationWrapper, Time, University } from './Styles/Education.styled';
import eduImg from '../edu.png';

const Education = () => {
    return(
        <div>
            <Container right>
            <EducationWrapper flex={"center"} margin={"6rem 0 0 6rem"}>
                <Heading>EDUCATION</Heading>
                <EducationItem>
                    <Time>2019 - 2023</Time>
                    <University>Egypt, Damanhour University</University>
                    <College>Bachelor of Commerce</College>
                </EducationItem>
                <EducationItem>
                    <Time>2020 - 2021</Time>
                    <University>Microverse (Remote)</University>
                    <College>Full stack web development Training</College>
                </EducationItem>
                <EducationItem>
                    <Time>2019 - 2020</Time>
                    <University>Michigan State University (Remote)</University>
                    <College>Game design and development</College>
                </EducationItem>
            </EducationWrapper>
            <SecondWrapper hght={"none"} mar={"7rem 4rem 0 0"}>
                <AboutImg img={`url(${eduImg})`} wid={"500px"} hght={"300px"} />
            </SecondWrapper>
            <LinesCont mar={"0 6rem"} hght={"20%"} right={"100"}>
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
