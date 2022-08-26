import styled from "styled-components";

const HeaderContainer = styled.div`
    padding: 2rem 0;
    margin: 0;
    background-image: ${props => props.right ? "linear-gradient(to right, #000, #303030, #303030, #303030)" : "linear-gradient(to left, black, #303030, #303030, #303030)"};
`

const List = styled.ul`
    margin: 0 5rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
`

const ListItem = styled.li`
    font-size: 0.7rem;
    padding: 0;
`

const ListLink = styled.a`
    text-decoration: none;
    padding: 0 0.5rem;
    color: white;
`

const Icon = styled.i`
    background-color: ${props => props.active ? "white" : 'none'};
    border-radius: ${props => props.active ? "50%" : '0'};
`

export { List, ListItem, ListLink, HeaderContainer, Icon }
