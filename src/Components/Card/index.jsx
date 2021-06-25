import { Link } from 'react-router-dom'
const Card = (props) => {
    const solicitarExclusao = () => {
        props.excluir(props.id)
    }

    return (
        <div className="container mt-5">
            <div className="card w-75 row flex-row mx-auto">
                <div className="col-6">
                    <img src={props.imagem} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="card-body col-6">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.descricao}</p>
                    <p className="card-text">{props.preco}</p>
                    <p className="card-text">{props.estoque}</p>
                    <p className="card-text">Categoria: {props.categoria}</p>

                    <a href="#" onClick={solicitarExclusao} className="btn btn-danger mx-2 my-2">Excluir</a>
                    <Link to={`alterarProduto/${props.id}`} className="btn btn-success">Alterar</Link>
                </div>
            </div>
        </div>
    )

}

export default Card
