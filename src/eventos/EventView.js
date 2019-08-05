
import React from 'react';
import axios from 'axios';
import EventTable from './EventTable';
import EventForm from './EventForm';
import ConvidadoForm from './ConvidadoForm';

export default class EventView extends React.Component {
  constructor() {
    super();
    this.state = {
      carregar: true
    };
  }

  listar() {
    axios.get("/api/eventos/").then(
      (retorno) => this.setState({
        carregar: false,
        eventos: retorno.data
      })
    );
  }

  cadastrar(evento) {
    axios.post("/api/eventos/", evento).then(
      () => this.listar()
    );
  }

  apagar(evento) {
    axios.delete(`/api/eventos/${evento.id}`).then(
      () => this.listar()
    );
  }

  componentDidMount() {
    document.title = "Eventos"

    this.listar();
  }

  
  render() {
    return <div>
        <EventForm onCadastrar={(evento) => this.cadastrar(evento)}/>

    <br></br>

    


    <br></br>


        {this.state.carregar ? "Carregando ..." :
            <EventTable
            itens={this.state.eventos}
            onApagar={(evento) => this.apagar(evento)}
        /> }
    </div>
  }
}
