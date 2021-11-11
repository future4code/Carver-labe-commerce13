import React from 'react';
import styled from 'styled-components';
import Cards from '../Products/Cards';

const ContainerPrincipal = styled.div`
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
`;

class Filtro extends React.Component {

  state = {
    inputValorMax: "",
    inputValorMin: "",
    inputBusca: ""
  }

 

  onChangeInputValorMax = (event) =>{
    this.setState({inputValorMax : event.target.value})
  }
  onChangeInputValorMin = (event) =>{
    this.setState({inputValorMin : event.target.value})
  }
  
  onChangeInputBusca = (event) =>{
    this.setState({inputBusca : event.target.value})
  }
  
  
  render() {
    
    return (
      <ContainerPrincipal>
        <h2>Filtro</h2>
        <p>Valor Mínimo</p>
        {this.state.inputValorMin}
        <input type="Number"
        value={this.state.inputValorMin} 
        onChange = {this.onChangeInputValorMin} />
        <p>Valor Máximo</p>
        <input type="Number" 
        value={this.state.inputValorMax}
        onChange = {this.onChangeInputValorMax} />
        <p>Busca</p>
        <input type ="text" 
        value={this.state.inputBusca} 
        onChange = {this.onChangeInputBusca} />
      </ContainerPrincipal>
    );
  }
}
export default Filtro;
