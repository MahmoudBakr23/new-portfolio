import { HomeDiv, Container, PorText, SecondDiv, NameHeading, SubHeading, OneLine, LinesCont, ImgContainer } from "./Styles/Home.styled";
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
            <SecondDiv>
                <ImgContainer />
            </SecondDiv>
            <LinesCont mar={"0 10rem"} hght={"100%"} right={"0"} top={"0"}>
                <OneLine />
                <OneLine />
                <OneLine />
                <OneLine />
                <OneLine />
            </LinesCont>
        <Header rightOrLeft={"right"} home={"active"} />
        </Container>
        </div>
    )
}

export default Home;
