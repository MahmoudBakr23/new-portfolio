import styled from "styled-components";
 
const EducationWrapper = styled.div`
    display: flex;
    justify-content: ${props => props.flex};
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: ${props => props.margin};
    @media (min-width: 320px) and (max-width: 560px) {
      align-items: flex-start;
      align-self: flex-start;
      flex-direction: column;
      margin: 1rem 3rem 0 3rem;
      width: auto;
  }
`

const EducationItem = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
    @media (min-width: 320px) and (max-width: 560px) {
      align-self: flex-start;
      margin: 0;
  }
`

const Time = styled.h4`
    font-size: 0.9rem;
    font-weight: 200;
`

const University = styled.h3`
    font-size: 1.1rem;
`

const College = styled.h4`
    font-size: 1rem;
    font-weight: 300;
`

export { EducationWrapper, EducationItem, Time, University, College }
