import styled from "styled-components";

const WorkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin-top: 6rem;
`

const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-self: flex-start;
`

const Project = styled.div`
    background-color: white;
    height: 100%;
`

export { WorkWrapper, Project, ProjectWrapper }
