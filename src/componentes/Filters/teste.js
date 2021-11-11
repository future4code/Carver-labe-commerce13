import React from "react";

class TituloClasse extends React.Component {
  render() {
    return <h2>{this.props.texto}</h2>;
  }
}

function TituloFuncao(props) {
  return <h2>{props.texto}</h2>;
}

function Subtitulo(props) {
  return <h4>{props.texto}</h4>;
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <TituloFuncao texto={this.props.titulo} />
        <Subtitulo texto={this.props.subtitulo} />
        <hr />
      </div>
    );
  }
}

export default class App extends React.Component {
  state = {
    nomeDoAutor: "Clark Kent"
  };

  mudaAutor = () => {
    if (this.state.nomeDoAutor === "Clark Kent") {
      this.setState({ nomeDoAutor: "Super-Homem" });
    } else {
      this.setState({ nomeDoAutor: "Clark Kent" });
    }
  };

  render() {
    const tituloBlog = "PLANETA DIÁRIO";
    const artigo =
      "Esse é o conteúdo do meu artigo que conta novidades sobre Metrópolis";
    const tituloMateria = "Super-homem derrota Lex Luthor";
    const subtituloMateria =
      "Centro de Metrópolis é destruído (novamente) no confronto ";

    return (
      <div>
        <h1>{tituloBlog}</h1>
        <Header titulo={tituloMateria} subtitulo={subtituloMateria} />
        <p>{artigo}</p>
        <p>
          <strong>Autor: </strong> {this.state.nomeDoAutor}
        </p>
        <button onClick={this.mudaAutor}>Mudar Autor</button>
      </div>
    );
  }
}
