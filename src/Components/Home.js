import { HomeDiv, Container, PorText, SecondDiv, NameHeading, SubHeading, OneLine, LinesCont, ImgContainer } from "./Styles/Home.styled";
import Header from "./Header";

const  Home = () => {
    return(
        <div>
        <Container right smpadd={"5rem 0"} pos={"fixed"} vh={"100vh"} dir={"column-reverse"}>
            <HomeDiv>
                <PorText>PORTFOLIO</PorText>
                <NameHeading>MAHMOUD BAKR</NameHeading>
                <SubHeading size={"1.2rem"}>FULL STACK DEVELOPER</SubHeading>
            </HomeDiv>
            <SecondDiv>
                <ImgContainer />
            </SecondDiv>
            <LinesCont mar={"0 10rem"} hght={"100%"} right={"0"} top={"0"} mdmar={"0 5rem"} mdhght={"100%"} mdright={"0"} mdtop={"0"} >
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
