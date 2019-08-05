
import React from 'react';

export default class ConvidadoForm extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                nome: ""
            
        }
    }

    limpar() {
            this.setState({
                nome: ""
            });
        
    }

    confirmar() {
            this.props.onCadastrar({
                nome: this.state.nome
            });
        
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
            <label>Nome </label>
            <input value={this.state.convidado} onChange={(convidado) => this.setState({convidado: convidado.target.value
                })}
            />
            <br /><br />
            <button disabled={this.state.valor < 0} onClick={() => this.confirmar()}>Adicionar</button>
        </div>
    }
}