import styled from "styled-components"

const ButtonContainer = styled.button`
  padding: 0.7em;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  width: 50%;
  cursor: pointer;
  transition: background 0.5s ease;
  &:hover{
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`

export default function Button({children}){
    return (
        <>
           <ButtonContainer>{children}</ButtonContainer>
        </>
    )
}