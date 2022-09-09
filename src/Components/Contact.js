import Header from "./Header";
import { Container, LinesCont, OneLine } from "./Styles/Home.styled";
import { EducationWrapper, Time, University, College, EducationItem } from "./Styles/Education.styled";
import { TechDiv, TechItem, Link } from "./Styles/Experience.styled";
import { Heading } from "./Styles/About.styled";
import { Name, NameDiv, FormBtn, FormDiv, Message } from "./Styles/Contact.styled";

const Contact = () => {
    return(
        <div>
            <Container right vh={"100%"} >
            <EducationWrapper flex={"center"} margin={"10rem 0 0 8rem"}>
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
            <EducationWrapper flex={"center"} margin={"8rem 8rem 0 0"}>
                <FormDiv action="https://formspree.io/f/myylerlb" method="POST">
                    <NameDiv>
                        <Name name="first Name" placeholder="First Name" width={"100%"} required/>
                        <Name name="second Name" placeholder="Last Name" margin={"0 0 0 1rem"} width={"100%"} required/>
                    </NameDiv>
                    <Name type="email" name="email" placeholder="Email" width={"100%"} margin={"1rem 0 0 0"} required/>
                    <Name name="subject" placeholder="Subject" width={"100%"} margin={"1rem 0 0 0"} required/>
                    <Message name="message" placeholder="Write your message here..." rows={"5"} required/>
                    <NameDiv>
                        <FormBtn name="Button" type="submit">SUBMIT</FormBtn>
                        <Time style={{width:"100%", margin:"1rem 0 0 0"}}>Thank you for submitting!</Time>
                    </NameDiv>
                </FormDiv>
            </EducationWrapper>
                <LinesCont right={"100"} top={"0"} hght={"40%"} mar={"0 8rem"}>
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
