import styled from "styled-components";

const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: flex-start;
    justify-content: start;
    width: 100%;
    height: 100%;
`

const NameDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`

const Name = styled.input`
    border: 0;
    outline: 0;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    width: ${props => props.width};
    margin: ${props => props.margin};
    background-color: #333;
    letter-spacing: 3px;
    &:focus {
        border-bottom: 1px solid white;
    }
    &::placeholder {
        color: white;
    }
`

const Message = styled.textarea`
    border: 0;
    outline: 0;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 300;
    margin: 1rem 0 0 0;
    color: white;
    width: 100%;
    background-color: #333;
    &:focus {
        border-bottom: 1px solid white;
    }
    &::placeholder {
        color: white;
    }
`

const FormBtn = styled.button`
    padding: 1rem;
    margin: 1rem 1rem 0 0;
    width: 100%;
    font-size: 1.3rem;
    font-weight: 500;
    background-color: white;
    color: #333;
    border: 1px solid white;
    outline: 0;
    background-color: #fff;
`

export { FormBtn, FormDiv, Name, Message, NameDiv };
