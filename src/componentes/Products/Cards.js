import React from 'react';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
  border: 1px solid blue;
  padding: 10px;
  margin: 10px;

  header {
    display: flex;
    justify-content: space-between;
  }
`;

class Cards extends React.Component {
  render() {
    return (
      <ContainerPrincipal>
        <header>
          Quantidade de produtos
          <line>
            Ordenação
            <select>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </line>
        </header>

        <p>cards</p>
        <p>cards</p>
      </ContainerPrincipal>
    );
  }
}
export default Cards;
