import { Container } from "./Styles/Home.styled";
import Header from "./Header";
import { EducationWrapper, EducationItem, Time, University, College } from "./Styles/Education.styled";
import { Heading } from "./Styles/About.styled";
import { WorkWrapper, ProjectWrapper, Project } from "./Styles/Experience.styled";

const Experience = () => {
    return(
        <div>
            <Container>
                <EducationWrapper flex={"start"}>
                    <Heading>Experience</Heading>
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
                <WorkWrapper>
                    <Heading>My Projects</Heading>
                    <ProjectWrapper>
                        <Project>Hi I'm Project</Project>
                        <Project>Hi I'm Project</Project>
                        <Project>Hi I'm Project</Project>
                    </ProjectWrapper>
                </WorkWrapper>
                <Header rightOrLeft={"left"} work={"active"} />
            </Container>
        </div>
    )
}

export default Experience;
