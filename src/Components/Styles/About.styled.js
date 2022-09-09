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
    @media (min-width: 320px) and (max-width: 560px) {
      align-items: center;
      align-self: flex-start;
      margin: 2rem 0;
      text-align: center;
  }
`

const Heading = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    margin: 0;
    @media (min-width: 1370px) {
    font-size: 6rem;
  }
  @media (min-width: 320px) and (max-width: 560px) {
    font-size: 2rem;
    margin: ${props => props.smmar};
  }
`

const SecondWrapper = styled.div`
    display: flex;
    height: ${props => props.hght};
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: ${props => props.mar};
    @media (min-width: 320px) and (max-width: 560px) {
      align-items: flex-start;
      align-self: flex-start;
      margin: ${props => props.smmar};
  }
`

const AboutImg = styled.div`
    background-image: ${props => props.img};
    width: ${props => props.wid};
    height: ${props => props.hght};
    background-size: cover;
    background-position: center center;
    @media (min-width: 320px) and (max-width: 459px) {
        height: 120px;
        width: 300px;
        width: ${props => props.smwid};
        height: ${props => props.smhg};
  }
  @media (min-width: 460px) and (max-width: 560px) {
        height: 150px;
        width: 400px;
        width: ${props => props.mdwid};
        height: ${props => props.mdhg};
  }
`

export { Heading, AboutWrapper, SecondWrapper, AboutImg }
