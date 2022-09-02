import { PropjectDetailsCont, ProjectDesc, ProjectHeading, Link, LinkDiv, TechDiv, TechItem } from "./Styles/Experience.styled";

const ProjectDetails = ({title, description, liveLink, repoLink, bgColor, tech1, tech2}) => {
    return(
        <PropjectDetailsCont className={"none"} bgColor={bgColor}>
            <ProjectHeading>{title}</ProjectHeading>
            <TechDiv>
                <TechItem margin={"0"}>{tech1}</TechItem>
                <TechItem margin={"0 0 0 0.5rem"}>{tech2}</TechItem>
            </TechDiv>
            <ProjectDesc>{description}</ProjectDesc>
            <LinkDiv>
                <Link href={liveLink} target="_blank" bgColor={"white"} color={"#333"} border={"1px solid white"}>Live Link</Link>
                <Link href={repoLink} target="_blank" bgColor={"none"} color={"#fff"} border={"1px solid white"}>Source Code</Link>
            </LinkDiv>
        </PropjectDetailsCont>
    )
}

export default ProjectDetails;
