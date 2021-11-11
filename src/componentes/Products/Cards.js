import React from 'react';
import styled from 'styled-components';
import Jupiter from '../img/Jupiter.jpg'

const ContainerPrincipal = styled.div`
  border: 1px solid blue;
  padding: 10px;
  margin: 10px;

  header {
    display: flex;
    justify-content: space-between;
  }
`;
const CardsPlanetas = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 150px;
  height: 300px;
  

  img {
    width: 150px;
    height: 170px;
  }
  `

class Cards extends React.Component {
  state = 
  {
    id:   Date.now(),
   name: "Jupiter",
   value: "R$ 1.000.00",
   imageUrl: <img src={Jupiter}Jupiter/>
 }
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
        <CardsPlanetas>
         <p>{this.state.imageUrl}</p>
         <p>{this.state.name}</p>
         <p>{this.state.value}</p>
         <button>Comprar</button>
        </CardsPlanetas>
        
      </ContainerPrincipal>
    );
  }
}
export default Cards;
