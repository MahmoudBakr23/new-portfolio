import { PropjectDetailsCont } from "./Styles/Experience.styled";

const ProjectDetails = ({project}) => {
    return(
        <PropjectDetailsCont className={"none"}>
            <h3>{project}</h3>
        </PropjectDetailsCont>
    )
}

export default ProjectDetails;
