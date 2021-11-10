import React from 'react';
import ItensCarrinho from './componentes/Carrinho/ItensCarrinho';
import Filtro from './componentes/Filters/Filtro';
import Cards from './componentes/Products/Cards';
import styled from 'styled-components';

const Container1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  height: 100vh;
`;

class App extends React.Component {
  render() {
    return (
      <Container1>
        <Filtro />
        <Cards />
        <ItensCarrinho />
      </Container1>
    );
  }
}
export default App;
