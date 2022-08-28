import styled from "styled-components";

const HeaderContainer = styled.div`
    padding: 2rem 0;
    margin: 0;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
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

export { List, ListItem, ListLink, HeaderContainer }
