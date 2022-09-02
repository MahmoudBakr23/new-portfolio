import Header from "./Header";
import { Container, LinesCont, OneLine } from "./Styles/Home.styled";
import { EducationWrapper, Time, University, College, EducationItem } from "./Styles/Education.styled";
import { TechDiv, TechItem, Link } from "./Styles/Experience.styled";
import { Heading } from "./Styles/About.styled";

const Contact = () => {
    return(
        <div>
            <Container right>
            <EducationWrapper flex={"center"} margin={"10rem 0 0 10rem"}>
                <Heading>Contact Me</Heading>
                <EducationItem>
                    <Time>Phone : +20 1146 467 077</Time>
                    <University>Email : mbakr6821@gmail.com</University>
                    <College>Address : Egypt, El-Buhayra, Damanhour, 22511</College>
                    <TechDiv>
                        <TechItem><Link href="https://www.linkedin.com/in/m-bakr/" target="_blank" color={"#fff"}>LinkedIn</Link></TechItem>
                        <TechItem margin={"0 0 0 0.5rem"}><Link href="https://www.github.com/MahmoudBakr23/" target="_blank" color={"#fff"}>GitHub</Link></TechItem>
                    </TechDiv>
                </EducationItem>
            </EducationWrapper>
                <LinesCont right={"100"} top={"0"} hght={"40%"} mar={"0 10rem"}>
                    <OneLine />
                    <OneLine />
                    <OneLine />
                    <OneLine />
                    <OneLine />
                </LinesCont>
                <Header rightOrLeft={"right"} contact={"active"} />
            </Container>
        </div>
    )
}

export default Contact;
