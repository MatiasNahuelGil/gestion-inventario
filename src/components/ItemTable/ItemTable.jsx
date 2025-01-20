import styled from "styled-components";
import { IoTrashSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import { axiosInstance } from "../../services/axios.config";
import { ItemsContext, UPLOAD_ITEMS } from "../context/itemsContext";

const RowContainer = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const Cell = styled.td`
  padding: 12px;
  border: 1px solid black;
`;

const IconCell = styled(Cell)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 16px;
  border: none;
`;

export default function ItemTable({ item }) {
  const { name, price, stock, id } = item;

  const [modal, setModal] = useState(false);

  const handleDelete = (id) => {
    axiosInstance.delete(`/${id}`).then((response) => {
      if (response.status === 200) {
        const itemsUpload = items.filter(
          (item) => item.id !== response.data.id
        );
        dispatch({ type: UPLOAD_ITEMS, payload: itemsUpload });
      } else {
        throw new Error(`[ERROR ${response.status}] Error en la solicitud`);
      }
    });
  };

  const { items, dispatch } = useContext(ItemsContext);

  return (
    <>
      <RowContainer>
        <Cell>{id}</Cell>
        <Cell>{name}</Cell>
        <Cell>{price}</Cell>
        <Cell>{stock}</Cell>
        <IconCell>
          <IoTrashSharp
            style={{ cursor: "pointer" }}
            onClick={() => handleDelete(id)}
          />
          <FaEdit
            style={{ cursor: "pointer" }}
            onClick={() => setModal(true)}
          />
        </IconCell>
      </RowContainer>
      <Modal show={modal} onHide={() => setModal(false)} item={item} />
    </>
  );
}
