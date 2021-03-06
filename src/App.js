/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import Venus from './componentes/img/Venus.jpg';
import Marte from './componentes/img/Marte.jpg';
import Saturno from './componentes/img/Saturno.jpg';
import Jupiter from './componentes/img/Jupiter.jpg';

const Container1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  height: 100vh;
`;
const ContainerFiltro = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
`;

const ContainerCards = styled.div`
  border: 1px solid blue;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
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

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;
const planetas = [
  {
    id: 1,
    name: 'Jupiter',
    value: 100000,
    imageUrl: <img src={Jupiter} Jupiter />,
    quantidade: 0,
  },
  {
    id: 2,
    name: 'Marte',
    value: 1200000,
    imageUrl: <img src={Marte} Marte />,
    quantidade: 0,
  },
  {
    id: 3,
    name: 'Venus',
    value: 3500000,
    imageUrl: <img src={Venus} Venus />,
    quantidade: 0,
  },
  {
    id: 4,
    name: 'Saturno',
    value: 400000,
    imageUrl: <img src={Saturno} Saturno />,
    quantidade: 0,
  },
];
class App extends React.Component {
  state = {
    inputValorMax: '',
    inputValorMin: '',
    inputBusca: '',
    selectOrdenacao: 'crescente',
    itemNovo: '',
    carrinho: [],
    remover: '',
  };

  onChangeInputValorMax = (event) => {
    this.setState({ inputValorMax: event.target.value });
  };
  onChangeInputValorMin = (event) => {
    this.setState({ inputValorMin: event.target.value });
  };

  onChangeInputBusca = (event) => {
    this.setState({ inputBusca: event.target.value });
  };

  onChangeMudarOrdenacao = (event) => {
    this.setState({ selectOrdenacao: event.target.value });
  };

  adicionarAoCarrinho = (idProduto) => {
    const produtoNoCarrinho = this.state.carrinho.find(
      (produto) => idProduto === produto.id
    );

    if (produtoNoCarrinho) {
      const novosProdutosNoCarrinho = this.state.carrinho.map((produto) => {
        if (idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }

        return produto;
      });

      this.setState({ carrinho: novosProdutosNoCarrinho });
    } else {
      const adicionarProdutos = planetas.find(
        (produto) => idProduto === produto.id
      );

      const novosProdutosNoCarrinho = [
        ...this.state.carrinho,
        { ...adicionarProdutos, quantidade: 1 },
      ];

      this.setState({ carrinho: novosProdutosNoCarrinho });
    }
  };

  valorTotal = () => {
    let valor = 0;

    for (let produto of planetas) {
      valor += produto.value * produto.quantidade;
    }

    return valor;
  };
  render() {
    const transformaPlaneta = planetas
      .filter((dado) => {
        return dado.name
          .toLowerCase()
          .includes(this.state.inputBusca.toLocaleLowerCase());
      })
      .filter((valor) => {
        return (
          this.state.inputValorMin === '' ||
          valor.value >= this.state.inputValorMin
        );
      })
      .filter((valor) => {
        return (
          this.state.inputValorMax === '' ||
          valor.value <= this.state.inputValorMax
        );
      })
      .sort((menor, maior) => {
        switch (this.state.selectOrdenacao) {
          case 'decrescente':
            return maior.value - menor.value;
          default:
            return menor.value - maior.value;
        }
      })
      .map((planeta) => {
        return (
          <CardsPlanetas>
            <b>{planeta.name}</b>
            {planeta.imageUrl}
            <b>R${planeta.value}</b>
            <p>
              <button
                onClick={() => {
                  this.adicionarAoCarrinho(planeta.id);
                }}
              >
                Comprar
              </button>
            </p>
          </CardsPlanetas>
        );
      });

    return (
      <Container1>
        <ContainerFiltro>
          <h2>Filtro</h2>
          <p>Valor M??nimo</p>
          <input
            type="number"
            value={this.state.inputValorMin}
            onChange={this.onChangeInputValorMin}
          />
          <p>Valor M??ximo</p>
          <input
            type="number"
            value={this.state.inputValorMax}
            onChange={this.onChangeInputValorMax}
          />
          <p>Busca</p>
          <input
            type="text"
            value={this.state.inputBusca}
            onChange={this.onChangeInputBusca}
          />
        </ContainerFiltro>
        <ContainerCards>
          <div>
            <Cabecalho>
              Quantidade de produtos
              <line>
                Ordena????o
                <select
                  value={this.state.selectOrdenacao}
                  onChange={this.onChangeMudarOrdenacao}
                >
                  <option value="crescente">Crescente</option>
                  <option value="decrescente">Decrescente</option>
                </select>
              </line>
            </Cabecalho>
          </div>
          {transformaPlaneta}
        </ContainerCards>
        <ContainerCarrinho>
          <h2>Itens Carrinho</h2>
          {this.state.carrinho.map((produto) => {
            return (
              <div>
                {produto.name}
                <button>remover</button>
              </div>
            );
          })}
          <p>Valor total: {this.valorTotal}</p>
        </ContainerCarrinho>
      </Container1>
    );
  }
}
export default App;
