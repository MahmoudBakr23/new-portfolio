import { ListLink, ListItem, List, HeaderContainer } from "./Styles/Header.styled";

const Header = ({home, about, edu, work, contact, rightOrLeft}) => {
    return(
        <HeaderContainer className={`${rightOrLeft}`}>
            <List>
                <ListItem>
                    <ListLink href="/"><i className={`fa-regular fa-circle ${home}`} /></ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="/aboutme"><i className={`fa-regular fa-circle ${about}`} /></ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="/education"><i className={`fa-regular fa-circle ${edu}`} /></ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="/mywork"><i className={`fa-regular fa-circle ${work}`} /></ListLink>
                </ListItem>
                <ListItem>
                    <ListLink href="/contactme"><i className={`fa-regular fa-circle ${contact}`} /></ListLink>
                </ListItem>
            </List>
        </HeaderContainer>
    )
}

export default Header
