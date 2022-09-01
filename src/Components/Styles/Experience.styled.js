import styled from "styled-components";

const WorkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 150%;
    margin-top: 2rem;
`

const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-self: flex-start;
`

const Project = styled.div`
    background-image: ${props => props.img};
    width: 220px;
    height: 400px;
    background-size: cover;
    background-position: center center;
    margin: 1rem;
`

const PropjectDetailsCont = styled.div`
    font-size: 1rem;
    background-color: rgba(255, 0, 0, 0.4);
    height: 100%;
    display: ${props => props.hidden};
`

export { WorkWrapper, Project, ProjectWrapper, PropjectDetailsCont }
