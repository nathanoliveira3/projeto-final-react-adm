import { useState, useEffect } from 'react'
import Card from '../Card'
import http from '../../http'

const ListarProdutos = () => {

    const [produtos, setProdutos] = useState([])

    const loadData = () => {
        http.get('produto')
            .then(response => setProdutos(response.data))
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
        {produtos.map((p) => {
           return <Card key={p.id} nome={p.nome} descricao={p.descricao} preco={p.preco} estoque={p.estoque} categoria={p.categoria.nome} />
        })}
        </>
    )

}

export default ListarProdutos
