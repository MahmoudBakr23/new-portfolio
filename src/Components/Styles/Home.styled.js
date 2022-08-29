import styled from "styled-components";
import myImg from "../../my_picture.png";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: ${props => props.right ? "linear-gradient(to right, #000, #303030, #303030, #303030)" : "linear-gradient(to left, black, #303030, #303030, #303030)"};
    color: white;
    padding: 0;
    margin: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`

const HomeDiv = styled.div`
    margin: 0rem 8rem 8rem 8rem;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

const PorText = styled.h3`
    background-color: white;
    color: black;
    font-weight: 600;
    letter-spacing: 7px;
    text-align: center;
    padding: 0.5rem 2rem;
    @media (min-width: 1370px) {
    font-size: 2rem;
  }
`

const NameHeading = styled.h1`
    font-size: 4rem;
    font-weight: 800;
    width: min-content;
    height: fit-content;
    margin: 0;
    line-height: 4.5rem;
    @media (min-width: 1370px) {
    font-size: 6rem;
    line-height: 6.5rem;
  }
`

const SubHeading = styled.h2`
    font-size: ${props => props.tight ? "1.2rem" : "1.5rem"};
    font-weight: 200;
    word-spacing: ${props => props.tight ? "0px" : "5px"};
    letter-spacing: ${props => props.tight ? "0px" : "5px"};
    margin: 0.5rem 0;
    width: ${props => props.wid};
    @media (min-width: 1370px) {
    font-size: 2.5rem;
  }
`

const SecondDiv = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    z-index: 11;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-end;
    margin-right: 1rem;
`

const ImgContainer = styled.div`
    background-image: url(${myImg});
    background-size: cover;
    background-position: center center;
    width: 400px;
    height: 450px;
    @media (min-width: 1370px) {
    height: 600px;
  }
`

const LinesCont = styled.div`
    display: flex;
    justify-content: center;
    height: ${props => props.short ? "35%" : "100%"};
    margin: ${props => props.short ? "0 6rem" : "0 10rem"};
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
`

const OneLine = styled.div`
    width: 2px;
    background-color: white;
    color: white;
    margin: 0 10px;
`

export { Container, HomeDiv, NameHeading, PorText, SubHeading, LinesCont, OneLine, ImgContainer, SecondDiv }
