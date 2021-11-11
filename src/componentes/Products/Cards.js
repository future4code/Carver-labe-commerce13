import React from 'react';
import styled from 'styled-components';
import Jupiter from '../img/Jupiter.jpg';
import Venus from '../img/Venus.jpg';
import Marte from '../img/Marte.jpg';
import Saturno from '../img/Saturno.jpg';

const ContainerPrincipal = styled.div`
  border: 1px solid blue;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
const Cabecalho = styled.header`

    display: flex;
    justify-content: space-between;
  
`;
const CardsPlanetas = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 150px;
  height: 300px;
  /* display: grid; */

  img {
    width: 150px;
    height: 170px;
  }
`;

class Cards extends React.Component {
  state = {
    planetas: [
      {
        id: Date.now(),
        name: 'Jupiter',
        value: 'R$ 1.000.00',
        imageUrl: <img src={Jupiter} Jupiter />,
      },
      {
        id: Date.now(),
        name: 'Marte',
        value: 'R$ 2.000.00',
        imageUrl: <img src={Marte} Marte />,
      },
      {
        id: Date.now(),
        name: 'Venus',
        value: 'R$ 3.000.00',
        imageUrl: <img src={Venus} Venus />,
      },
      {
        id: Date.now(),
        name: 'Saturno',
        value: 'R$ 4.000.00',
        imageUrl: <img src={Saturno} Saturno />,
      },
    ],
  };
  render() {
    const variavel = this.state.planetas.map((planeta) => {
      return (
        <CardsPlanetas>
          <b>{planeta.name}</b>
          {planeta.imageUrl}
          <b>{planeta.value}</b>
          <p><button>Comprar</button></p>
        </CardsPlanetas>
      )
    });
    return (
      <ContainerPrincipal>
        <div>
          <Cabecalho>
          Quantidade de produtos
          <line>
          Ordenação
          <select>
          <option>Crescente</option>
          <option>Decrescente</option>
          </select>
          </line>
          </Cabecalho>
        </div>
        {variavel}
      </ContainerPrincipal>

    );
  }
}
export default Cards;
