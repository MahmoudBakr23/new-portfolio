import styled from "styled-components";
import myImg from "../../my_picture.png"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: ${props => props.right ? "linear-gradient(to right, black , #303030)" : "linear-gradient(to left, black , #303030)"};
    color: white;
    padding: 0;
    margin: 0;
`;

const ImgContainer = styled.div`
    margin: 0 4rem;
    background-image: url(${myImg});
    width: 400px;
    height: 550px;
    background-size: cover;
    background-position: 100% 50%;
`

export { Container, ImgContainer }
