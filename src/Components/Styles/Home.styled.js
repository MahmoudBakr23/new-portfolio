import styled from "styled-components";
import linedImg from "../../vertical_lines.png"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: white;
`;

const LinesImg = styled.div`
    background-image: url(${linedImg});
    width: 100%;
    height: 100%;
`

export { Container, LinesImg }
