import styled from "styled-components";

const AboutContainer = styled.div`
    margin: 0;
    width: 100%;
`

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: flex-end;
    text-align: right;
    width: 100%;
    margin: 6rem;
`

const Heading = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    height: fit-content;
    margin: 0;
    @media (min-width: 1370px) {
    font-size: 6rem;
  }
`

const SecondWrapper = styled.div`
    display: flex;
    width: 100%;
`

const AboutImg = styled.div`
    width: 600px;
    height: 300px;
`

export { AboutContainer, Heading, AboutWrapper, SecondWrapper, AboutImg }
