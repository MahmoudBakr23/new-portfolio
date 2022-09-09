import styled from "styled-components";

const WorkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 200%;
    margin-top: 2rem;
    @media (min-width: 320px) and (max-width: 560px) {
      align-items: center;
      align-self: flex-start;
      flex-direction: column;
      margin: 0;
      width: 100%;
  }
`

const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-self: flex-start;
    height: 100%;
    padding-top: 1rem;
    @media (min-width: 320px) and (max-width: 560px) {
      flex-direction: column;
      margin: 2rem 0;
      padding: 0;
      height: 100%;
      align-items: center;
      justify-content: center;
      align-self: center;
  }
`

const Project = styled.div`
    background-image: ${props => props.img};
    width: 250px;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    margin: ${props => props.margin};
    @media (min-width: 320px) and (max-width: 560px) {
        width: 300px;
        height: 430px;
        background-size: cover;
        margin: 1rem 0 0 0;
  }
`

const PropjectDetailsCont = styled.div`
    font-size: 1rem;
    background-color: ${props => props.bgColor};
    height: 100%;
    display: ${props => props.hidden};
    padding: 1rem;
    position: relative;
    @media (min-width: 320px) and (max-width: 560px) {
        /* margin: 1rem 0 0 0; */
        height: 400px;
  }
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
    border: ${props => props.border};
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
