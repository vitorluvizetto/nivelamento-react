
import React from 'react';

export default class ConvidadoTable extends React.Component {

    render() {
        return <div>
        <table border="1">
            <thead>
                <tr>
                    <td >Convidados</td>
                </tr>
            </thead>
            <tbody>
                {this.props.itens.map((convidado) => (
                    <tr key={convidado.id}>
                        <td >{convidado.nome}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            
            
        </div>
    }
}

