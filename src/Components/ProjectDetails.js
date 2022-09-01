import { PropjectDetailsCont, ProjectDesc, ProjectHeading, Link, LinkDiv, TechDiv, TechItem } from "./Styles/Experience.styled";

const ProjectDetails = ({title, description, liveLink, repoLink}) => {
    return(
        <PropjectDetailsCont className={"none"}>
            <ProjectHeading>{title}</ProjectHeading>
            <TechDiv>
                <TechItem margin={"0"}>React</TechItem>
                <TechItem margin={"0 0 0 0.5rem"}>Redux</TechItem>
                <TechItem margin={"0 0 0 0.5rem"}>CSS</TechItem>
            </TechDiv>
            <ProjectDesc>{description}</ProjectDesc>
            <LinkDiv>
                <Link href={liveLink} target="_blank" bgColor={"white"} color={"#333"}>Live Link</Link>
                <Link href={repoLink} target="_blank" bgColor={"none"} color={"#fff"}>Source Code</Link>
            </LinkDiv>
        </PropjectDetailsCont>
    )
}

export default ProjectDetails;
