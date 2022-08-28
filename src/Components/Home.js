import { HomeDiv, Container, PorText, NameHeading, SubHeading, OneLine, LinesCont } from "./Styles/Home.styled";
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
        </Container>
        <LinesCont>
                <OneLine />
                <OneLine />
                <OneLine />
                <OneLine />
                <OneLine />
            </LinesCont>
        <Header rightOrLeft={"right"} home={"active"} />
        </div>
    )
}

export default Home;
