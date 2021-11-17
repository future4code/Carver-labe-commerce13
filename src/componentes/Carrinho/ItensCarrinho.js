import React from 'react';
import styled from 'styled-components';
import App from '../../App';

const ContainerPrincipal2 = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;

class ItensCarrinho extends React.Component {
  render() {
    return (
      <ContainerPrincipal2>
        <h2>Itens Carrinho</h2>
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
      </ContainerPrincipal2>
    );
  }
}
export default ItensCarrinho;
