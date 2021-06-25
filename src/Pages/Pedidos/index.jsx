import { useState, useEffect } from "react"
import http from '../../http'
import Titulo from '../../Components/Titulo'
import CardPedido from '../../Components/CardPedido'

const Pedidos = () => {

    const [pedidos, setPedidos] = useState([{ produtos: [] }])

    useEffect(() => {
        atualizar();
    }, [])

    const atualizar = () => {
        http.get('pedido/')
            .then(response => setPedidos(response.data))
    }

    return (
        <div className="row">
            <Titulo> Pedidos </Titulo>
            {pedidos.map((item, index) => {
                return (
                    <CardPedido aoStatusAtualizado={atualizar} key={index} status={item.status} codigo={item.codigo} valor={item.valor} produto={item.produtos.map((produto, index) => <li className="list-group-item" key={index}>{produto}</li>)} />
                )
            })}
        </div>
    )
}

export default Pedidos;