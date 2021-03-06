import { Link } from 'react-router-dom'
const TableCategoria = (props) => {
    const solicitarExclusao = () => {
        props.excluir(props.id)
    }
    
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.descricao}</td>
            <td><button className="btn btn-danger" onClick={solicitarExclusao}>X</button></td>
            <td><Link className="btn btn-success" to={`alterarCategoria/${props.id}`}>Editar</Link></td>
        </tr>
    )
}

export default TableCategoria