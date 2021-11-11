import React from 'react';
import ItensCarrinho from './componentes/Carrinho/ItensCarrinho';
import Filtro from './componentes/Filters/Filtro';
import Cards from './componentes/Products/Cards';
import styled from 'styled-components';
import Venus from './componentes/img/Venus.jpg'
import Marte from './componentes/img/Marte.jpg'
import Saturno from './componentes/img/Saturno.jpg'
import Jupiter from './componentes/img/Jupiter.jpg'

const Container1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  height: 100vh;
`;

class App extends React.Component {
 state =
 {
	id: Date.now(),
	name: "Jupiter",
	value: 10000.0,
	imageUrl: {Jupiter},
}

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
