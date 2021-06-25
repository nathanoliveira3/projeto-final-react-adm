import './estilos.css'
import http from '../../http'

const CardPedido = (props) => {

    const finalizarPedido = () => {
        const pedido = {
            codigo: props.codigo,
            status: "FINALIZADO"
        }
        http.put("pedido/statusPedido", pedido)
            .then(response => {
                console.log(response.data);
                props.aoStatusAtualizado();
            })
    }

    return (
        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-5">
            <div className="card card-pedido pt-0">
                <div className="card-header">
                    Codigo: {props.codigo}
                </div>
                <div className="card-body">
                    <h5 className="card-title">R$ {props.valor}</h5>
                    <ul className="list-group mt-3">
                        Produtos {props.produto}
                    </ul>
                    <p className="card-text mt-4">Status do Pedido: {props.status}</p>
                    {props.status != "FINALIZADO" && <button className="btn btn-danger" onClick={finalizarPedido}>Finalizar pedido</button>}
                    

                </div>
            </div>
        </div>
    )
}

export default CardPedido