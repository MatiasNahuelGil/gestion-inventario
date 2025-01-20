import styled from "styled-components";
import ItemTable from "../ItemTable/ItemTable";


const TableContainer = styled.table`
  border: 1px solid black;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  
`;


const RowContainer = styled.tr`
  &:nth-child(even) {
    background-color: var(--secondary-color);
  }
  &:hover {
    background-color: #ddd; 
  }
`;



const HeaderCell = styled.th`
  padding: 12px;
  border: 1px solid black;
  background-color:var(--terciary-color); 
  color: white; 
`;


export default function Table({ items}) {
  return (
    <>
      <TableContainer>
        <thead>
          <RowContainer>
            <HeaderCell>#ID</HeaderCell>
            <HeaderCell>Producto</HeaderCell>
            <HeaderCell>Precio</HeaderCell>
            <HeaderCell>Stock</HeaderCell>
            <HeaderCell>Editar</HeaderCell>
          </RowContainer>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
                <ItemTable item={item} key={index} />
              );
          })}
        </tbody>
      </TableContainer>
    </>
  );
}
