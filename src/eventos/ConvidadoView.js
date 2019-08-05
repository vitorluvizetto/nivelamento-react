import React from 'react';
import axios from 'axios';
import ConvidadoForm from './ConvidadoForm';
import ConvidadoTable from './ConvidadoTable';


export default class ConvidadoView extends React.Component {
    constructor() {
        super();
        this.state = {
            carregar: true
        }
    }



    listarConvidados() {
        axios.get(`/api/eventos/${this.props.id}/convidados/`).then(
            (retornoConvidado) => this.setState({
                carregar: false,
                convidados: retornoConvidado.data
            })
        );
    }

    cadastrar(convidado) {
        axios.post(`/api/eventos/${this.props.id}/convidados/`, convidado).then(
            () => this.listarConvidados()
        );
    }



    componentDidMount() {
        this.listarConvidados();
    }

    

    render() {
        return <div>
            {this.state.carregar ? "" :
                <ConvidadoTable itens={this.state.convidados}/>

            }

            <ConvidadoForm  onCadastrar={(convidado) => this.cadastrar(convidado)}/>
        </div>
    }
}
