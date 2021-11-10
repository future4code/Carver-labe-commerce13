import React from 'react';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
`;

class Filtro extends React.Component {
  render() {
    return (
      <ContainerPrincipal>
        <h2>Filtro</h2>
        <p>Valor Mínimo</p>
        <input type="Number" value="" />
        <p>Valor Máximo</p>
        <input type="Number" value="" />
        <p>Busca</p>
        <input value="" />
      </ContainerPrincipal>
    );
  }
}
export default Filtro;
