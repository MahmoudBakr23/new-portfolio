import styled from "styled-components";
import aboutImg from "../../aboutme.png"

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
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    margin-left: 6rem;
`

const AboutImg = styled.div`
    background-image: url(${aboutImg});
    width: 500px;
    height: 200px;
    background-size: cover;
    background-position: center center;
`

export { Heading, AboutWrapper, SecondWrapper, AboutImg }
