// import { Link } from "react-router-dom";
import { ListLink, ListItem, List, HeaderContainer, Icon } from "./Styles/Header.styled";

const Header = () => {
    return(
        <HeaderContainer right>
            <List>
                <ListItem>
                    <ListLink href="/"><Icon className="fa-regular fa-circle" active /></ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="/aboutme"><Icon className="fa-regular fa-circle" /></ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="/education"><Icon className="fa-regular fa-circle" /></ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="/mywork"><Icon className="fa-regular fa-circle" /></ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="/contactme"><Icon className="fa-regular fa-circle" /></ListLink>
                </ListItem>
            </List>
        </HeaderContainer>
    )
}

export default Header
