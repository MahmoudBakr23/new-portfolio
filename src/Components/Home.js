import { ImgContainer, HomeDiv, Container, PorText, NameHeading, SubHeading } from "./Styles/Home.styled";
import Header from "./Header";
const  Home = () => {
    return(
        <div>
        <Container right>
            <HomeDiv>
                <PorText>PORTFOLIO</PorText>
                <NameHeading>MAHMOUD BAKR</NameHeading>
                <SubHeading>FULL STACK DEVELOPER</SubHeading>
            </HomeDiv>
            <ImgContainer />
        </Container>
        <Header rightOrLeft={"right"} home={"active"} />
        </div>
    )
}

export default Home;
