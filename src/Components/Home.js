import { ImgContainer, HomeDiv, Container, PorText, NameHeading, SubHeading } from "./Styles/Home.styled";

const  Home = () => {
    return(
        <Container right>
            <HomeDiv>
                <PorText>PORTFOLIO</PorText>
                <NameHeading>MAHMOUD BAKR</NameHeading>
                <SubHeading>FULL STACK DEVELOPER</SubHeading>
            </HomeDiv>
            <ImgContainer />
        </Container>
    )
}

export default Home;
