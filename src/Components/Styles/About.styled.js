import styled from "styled-components";
// import aboutImg from "../../aboutme.png"

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    margin: 10rem 6rem 0rem 6rem;
    padding: 0;
    width: 100%;
`

const Heading = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    margin: 0;
    @media (min-width: 1370px) {
    font-size: 6rem;
  }
`

const SecondWrapper = styled.div`
    display: flex;
    height: ${props => props.hght};
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: ${props => props.mar};
`

const AboutImg = styled.div`
    background-image: ${props => props.img};
    width: ${props => props.wid};
    height: ${props => props.hght};
    background-size: cover;
    background-position: center center;
`

export { Heading, AboutWrapper, SecondWrapper, AboutImg }
