
import React from 'react';

export default class EventForm extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                evento: "",
                local: ""
            
        }
    }

    limpar() {
            this.setState({
                evento: "",
                local: ""
            });
        
    }

    confirmar() {
            this.props.onCadastrar({
                evento: this.state.evento,
                local: this.state.local
            });
        
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
            <h2>Cadastrar eventos</h2>
            <label>Evento </label>
            <input value={this.state.evento} onChange={(evento) => this.setState({evento: evento.target.value
                })}
            />
            <br></br>
            <label>Local </label>
            <input value={this.state.local} onChange={(local) => this.setState({ local: local.target.value
                })}
            />
            <br /><br />
            <button disabled={this.state.valor < 0} onClick={() => this.confirmar()}>Cadastrar</button>
        </div>
    }
}