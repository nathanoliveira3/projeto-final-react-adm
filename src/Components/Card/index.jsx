
const Card = (props) => {


    return (
        <div className="container">
            <div className="card w-75">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.nome}</h5>
                    <p className="card-text">{props.descricao}</p>
                    <p className="card-text">{props.preco}</p>
                    <p className="card-text">{props.estoque}</p>
                    <p className="card-text">Categoria: {props.categoria}</p>

                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )

}

export default Card
