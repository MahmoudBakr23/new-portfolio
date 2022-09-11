import styled from "styled-components";
import myImg from "../../my_picture.png";
import mobileImg from "../../mobile_me.png";

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
    @media (min-width: 320px) and (max-width: 560px) {
      flex-direction: ${props => props.dir};
      justify-content: start;
      position: ${props => props.pos};
      padding: ${props => props.smpadd};
      height: ${props => props.vh};
    }
    @media (min-width: 561px) and (max-width: 1015px) {
      justify-content: start;
    }
    @media (min-width: 320px) and (max-width: 1015px) {
      flex-direction: ${props => props.middir};
  }
`

const HomeDiv = styled.div`
    margin: 0rem 8rem 8rem 8rem;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    @media (min-width: 320px) and (max-width: 560px) {
      align-self: center;
      margin: 4rem 0 0 0;
      align-items: center;
      text-align: center;
    }
    @media (min-width: 561px) and (max-width: 1015px) {
      margin: 4rem 2rem 0 2rem;
      align-items: center;
      align-self: center;
    }
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
  @media (min-width: 320px) and (max-width: 560px) {
      font-size: 1.1rem;
  }
  @media (min-width: 561px) and (max-width: 1015px) {
      font-size: 1rem;
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
  @media (min-width: 320px) and (max-width: 560px) {
      font-size: 2.5rem;
      line-height: 3rem;
      text-align: center;
      width: 100%;
      height: fit-content;
      margin: 0.5rem 0 1rem 0;
  }
  @media (min-width: 561px) and (max-width: 1015px) {
      font-size: 2.5rem;
      line-height: 2.5rem;
  }
`

const SubHeading = styled.h2`
    font-size: ${props => props.tight ? "1.1rem" : "1.5rem"};
    font-weight: 200;
    word-spacing: ${props => props.tight ? "0px" : "5px"};
    letter-spacing: ${props => props.tight ? "0px" : "5px"};
    margin: 0.5rem 0;
    @media (min-width: 1370px) {
    font-size: 2.5rem;
  }
    @media (min-width: 320px) and (max-width: 560px) {
      font-size: ${props => props.size};
      word-spacing: 1px;
      letter-spacing: 1px;
      margin: 0;
      padding: 0 1rem;
  }
  @media (min-width: 561px) and (max-width: 1015px) {
      font-size: 1.2rem;
  }
`

const SecondDiv = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    z-index: 11;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    margin-right: 1rem;
    @media (min-width: 320px) and (max-width: 560px) {
      align-items: center;
      align-self: flex-start;
      margin: 2rem 0 0 0;
  }
  @media (min-width: 561px) and (max-width: 1015px) {
      align-items: center;
      align-self: center;
      margin: 2rem 0 0 0;
  }
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
  @media (min-width: 320px) and (max-width: 560px) {
      height: 200px;
      width: 200px;
      background-image: url(${mobileImg});
  }
  @media (min-width: 561px) and (max-width: 1015px) {
      width: 300px;
      height: 350px;
  }
`

const LinesCont = styled.div`
    display: flex;
    justify-content: center;
    margin: ${props => props.mar};
    height: ${props => props.hght};
    position: absolute;
    right: ${props => props.right};
    top: ${props => props.top};
    bottom: 0;
    z-index: 10;
    @media (min-width: 320px) and (max-width: 560px) {
      display: none;
    }
    @media (min-width: 561px) and (max-width: 1015px) {
      margin: ${props => props.mdmar};
      height: ${props => props.mdhght};
      right: ${props => props.mdright};
      top: ${props => props.mdtop};
    }
`

const OneLine = styled.div`
    width: 2px;
    background-color: white;
    color: white;
    margin: 0 10px;
`

export { Container, HomeDiv, NameHeading, PorText, SubHeading, LinesCont, OneLine, ImgContainer, SecondDiv }
