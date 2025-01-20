
import styled from "styled-components";
import FormCreateProduct from "../components/Form/FormCreateProduct";

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  h1{
    font-size: 32px;
    padding: 0.5em;
  }
`


export default function CreateProduct() {
  

  return (
    <>
      <FormContainer>
        <h1>Cargar producto al inventario</h1>
        <FormCreateProduct/>
      </FormContainer>
      
    </>
  );
}
