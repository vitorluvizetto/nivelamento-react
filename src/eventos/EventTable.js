
import React from 'react';
import ConvidadoView from './ConvidadoView';

export default class EventTable extends React.Component {

    render() {
        return <div>
        <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td >Nome</td>
                    <td >Local</td>
                    <td>Exclusão</td>
                </tr>
            </thead>
            <tbody>
                {this.props.itens.map((evento) => (
                    <tr key={evento.id}>
                        <td >{evento.id}</td>
                        <td >{evento.evento}</td>
                        <td >{evento.local}</td>
                        <td >
                            <button onClick={() => this.props.onApagar(evento)}>Excluir</button>
                        </td>
                        <ConvidadoView id={evento.id}/>
                    </tr>
                ))}
            </tbody>
        </table>
            
            
        </div>
    }
}

