import styled from "styled-components";

const WorkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 200%;
    margin-top: 2rem;
`

const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-self: flex-start;
    height: 100%;
    padding-top: 1rem;
`

const Project = styled.div`
    background-image: ${props => props.img};
    width: 260px;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    margin: ${props => props.margin};
`

const PropjectDetailsCont = styled.div`
    font-size: 1rem;
    background-color: rgba(0, 0, 255, 0.6);
    height: 100%;
    display: ${props => props.hidden};
    padding: 1rem;
`

const ProjectHeading = styled.h3`
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1rem 0 0 0;
    width: 100%;
    letter-spacing: 2px;
`

const ProjectDesc = styled.p`
    font-weight: 300;
    font-size: 1.1rem;
    word-spacing: 1px;
    letter-spacing: 2px;
    margin: 0 0rem;
    width: 100%;
`

const Link = styled.a`
    text-decoration: none;
    background-color: ${props => props.bgColor};
    padding: 0.5rem 1rem;
    color: ${props => props.color};
    font-weight: 300;
    letter-spacing: 2px;
    border: 1px solid white;
    border-radius: 50px;
    margin: 0.5rem 0;
`

const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    align-self: flex-end;
    margin-top: 1rem;
`

const TechDiv = styled.ul`
    display: flex;
    align-items: flex-start;
    list-style: none;
    margin: 0.5rem 0 1rem 0;
`

const TechItem = styled.li`
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 2px;
    margin: ${props => props.margin};
    padding: 0.5rem;
    border: 0.5px solid white;
`

export { WorkWrapper, Project, ProjectWrapper, PropjectDetailsCont, ProjectHeading, ProjectDesc, Link, LinkDiv, TechDiv, TechItem }
