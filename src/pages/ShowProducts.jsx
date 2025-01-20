import { useContext, useEffect } from "react";
import { axiosInstance } from "../services/axios.config";
import Table from "../components/Table/Table";
import styled from "styled-components";
import { ItemsContext, UPLOAD_ITEMS } from "../components/context/itemsContext";

const TitleContainer = styled.h1`
  text-align: center;
  padding: 1em;
`;
const InventoryContainer = styled.section`
  padding: 2em;
`;

export default function ShowProducts() {
  const { state, dispatch } = useContext(ItemsContext);
  const { items, searchTerm } = state;

  
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    axiosInstance
      .get("/")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UPLOAD_ITEMS, payload: response.data });
        } else {
          throw new Error(`${response.status}, Error en la solicitud`);
        }
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <InventoryContainer>
      <TitleContainer>Inventario de productos</TitleContainer>
      <div>
        {filteredItems.length > 0 ? (
          <Table items={filteredItems} />
        ) : (
          <h2>No hay productos en el sistema</h2>
        )}
      </div>
    </InventoryContainer>
  );
}
