import styled from "styled-components";
import aboutBg from '../../aboutbg.png';

const AboutContainer = styled.div`
    background-image: url(${aboutBg});
    margin: 0;
    background-size: cover;
    background-position: center center;
    width: 100%;
`

const AboutWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6rem 8rem;
    align-self: flex-end;
    align-items: flex-start;
`

const Heading = styled.h1`
    font-size: 2rem;
    margin: 0;
`

export { AboutContainer, Heading, AboutWrapper }
