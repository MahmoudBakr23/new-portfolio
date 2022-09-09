import { Container } from "./Styles/Home.styled";
import Header from "./Header";
import { EducationWrapper, EducationItem, Time, University, College } from "./Styles/Education.styled";
import { Heading } from "./Styles/About.styled";
import { WorkWrapper, ProjectWrapper, Project } from "./Styles/Experience.styled";
import test1 from '../test1.png'
import test2 from '../test2.png'
import test3 from '../test3.png'
import ProjectDetails from "./ProjectDetails";
import { LinesCont, OneLine } from "./Styles/Home.styled";

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
            <Container smpadd={"0"}>
                <EducationWrapper flex={"start"} margin={"2rem 0 0 4rem"}>
                    <Heading>Experience</Heading>
                    <EducationItem>
                        <Time>Mar 2022 - Present</Time>
                        <University>Code Reviewer - Microverse (Remote)</University>
                        <College>Part-time</College>
                    </EducationItem>
                    <EducationItem>
                        <Time>Nov 2021 - Mar 2022</Time>
                        <University>Senior Code Reviewer - Microverse (Remote)</University>
                        <College>Full-time (Contract)</College>
                    </EducationItem>
                    <EducationItem>
                        <Time>Jan 2021 - Nov 2021</Time>
                        <University>Code Reviewer - Microverse (Remote)</University>
                        <College>Part-time</College>
                    </EducationItem>
                </EducationWrapper>
                <WorkWrapper>
                    <Heading smmar={"8rem 0 0 0"} >My Projects</Heading>
                    <ProjectWrapper>
                        <Project img={`url(${test1})`}
                                 className={"one"}
                                 onMouseEnter={handleHiddenDiv1}
                                 onMouseLeave={handleVisibleDiv1}
                                 margin={"0rem"}
                        >
                            <ProjectDetails title={"Library"}
                                            description={"Adding new various books, and filtering them by category in a cool and simple static UI. "}
                                            liveLink={"https://limerary.herokuapp.com/"}
                                            repoLink={"https://github.com/MahmoudBakr23/Limerary"}
                                            bgColor={"rgba(0, 0, 255, 0.9)"}
                                            tech1={"React"}
                                            tech2={"Redux"}
                            />
                        </Project>
                        <Project img={`url(${test2})`}
                                 className={"two"}
                                 onMouseEnter={handleHiddenDiv2}
                                 onMouseLeave={handleVisibleDiv2}
                                 margin={"1rem"}
                        >
                            <ProjectDetails title={"Anime Quotes"}
                                            description={"Search for your favorite Anime, and then search again for your favorite character's quotes."}
                                            liveLink={"https://quotexquote.herokuapp.com/"}
                                            repoLink={"https://github.com/MahmoudBakr23/quoteXquote/tree/feature"}
                                            bgColor={"rgba(255, 140, 0, 0.9)"}
                                            tech1={"React"}
                                            tech2={"Redux"}
                            />
                        </Project>
                        <Project img={`url(${test3})`}
                                 className={"three"}
                                 onMouseEnter={handleHiddenDiv3}
                                 onMouseLeave={handleVisibleDiv3}
                                 margin={"1rem"}
                        >
                            <ProjectDetails title={"Transactions Group"}
                                            description={"Track your purchases by adding and sorting them by group type."}
                                            liveLink={"https://warm-cliffs-32314.herokuapp.com/"}
                                            repoLink={"https://github.com/MahmoudBakr23/Group-Transactions"}
                                            bgColor={"rgba(119, 0, 200, 0.9)"}
                                            tech1={"Ruby"}
                                            tech2={"Ruby on Rails"}
                                            
                            />
                        </Project>
                    </ProjectWrapper>
                </WorkWrapper>
                <LinesCont mar={"0 4rem"} hght={"30%"} right={"100"} top={"100"}>
                    <OneLine />
                    <OneLine />
                    <OneLine />
                    <OneLine />
                    <OneLine />
                </LinesCont>
                <Header rightOrLeft={"left"} work={"active"} />
            </Container>
        </div>
    )
}

export default Experience;
