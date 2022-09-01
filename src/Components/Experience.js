import { Container } from "./Styles/Home.styled";
import Header from "./Header";
import { EducationWrapper, EducationItem, Time, University, College } from "./Styles/Education.styled";
import { Heading } from "./Styles/About.styled";
import { WorkWrapper, ProjectWrapper, Project } from "./Styles/Experience.styled";
import test1 from '../test1.png'
import test2 from '../test2.png'
import test3 from '../test3.png'
import ProjectDetails from "./ProjectDetails";

const Experience = () => {
    const handleHiddenDiv1 = () => {
        const project1 = document.querySelector('.one')
        project1.firstChild.classList.replace('none', 'block')
    }
    const handleHiddenDiv2 = () => {
        const project2 = document.querySelector('.two')
        project2.firstChild.classList.replace('none', 'block')
    }
    const handleHiddenDiv3 = () => {
        const project3 = document.querySelector('.three')
        project3.firstChild.classList.replace('none', 'block')
    }
    const handleVisibleDiv1 = () => {
        const project1 = document.querySelector('.one')
        project1.firstChild.classList.replace('block', 'none')
    }
    const handleVisibleDiv2 = () => {
        const project2 = document.querySelector('.two')
        project2.firstChild.classList.replace('block', 'none')
    }
    const handleVisibleDiv3 = () => {
        const project3 = document.querySelector('.three')
        project3.firstChild.classList.replace('block', 'none')
    }

    return(
        <div>
            <Container>
                <EducationWrapper flex={"start"} margin={"2rem 0 0 4rem"}>
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
                        <Project img={`url(${test1})`}
                                 className={"one"}
                                 onMouseEnter={handleHiddenDiv1}
                                 onMouseLeave={handleVisibleDiv1}
                                 margin={"0rem"}
                        >
                            <ProjectDetails title={"Library"}
                                            description={"This is the first project you are about to see!"}
                                            liveLink={"https://www.google.com/"}
                                            repoLink={"https://www.google.com/"}
                            />
                        </Project>
                        <Project img={`url(${test2})`}
                                 className={"two"}
                                 onMouseEnter={handleHiddenDiv2}
                                 onMouseLeave={handleVisibleDiv2}
                                 margin={"1rem"}
                        >
                            <ProjectDetails title={"I am project 2"}
                                            description={"This is the first project you are about to see! This is the first project you are about to see! This is the first"}
                                            liveLink={"https://www.google.com/"}
                                            repoLink={"https://www.google.com/"}
                            />
                        </Project>
                        <Project img={`url(${test3})`}
                                 className={"three"}
                                 onMouseEnter={handleHiddenDiv3}
                                 onMouseLeave={handleVisibleDiv3}
                                 margin={"1rem"}
                        >
                            <ProjectDetails title={"I am project 3"}
                                            description={"This is the first project you are about to see!"}
                                            liveLink={"https://www.google.com/"}
                                            repoLink={"https://www.google.com/"}
                            />
                        </Project>
                    </ProjectWrapper>
                </WorkWrapper>
                <Header rightOrLeft={"left"} work={"active"} />
            </Container>
        </div>
    )
}

export default Experience;
