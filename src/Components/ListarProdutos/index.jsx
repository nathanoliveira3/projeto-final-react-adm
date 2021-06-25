import { useState, useEffect } from 'react'
import Card from '../Card'
import http from '../../http'

const ListarProdutos = () => {

    const [produtos, setProdutos] = useState([])
    const [produto, setProduto] = useState({})
    const [nome, setNome] = useState('')

    const loadData = () => {
        http.get('produto')
            .then(response => setProdutos(response.data))
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        loadData()
    }, [])

    const excluir = (id) => {
        http.delete('produto/' + id)
        .then(() => loadData())
    }

    useEffect(() => {            
        http.get('produto?nome=' + nome)
        .then(response => setProduto(response.data))
    }, [nome]) 

    if(nome) {            

            return(
                <>
                <h1 className="text-center mb-5">Produtos</h1>
            <div className="container mt-5">
                <div className="col-6 mx-auto">
                    <input value={nome} className="form-control col-6 my-5" type="text" onChange={(evento) => setNome(evento.target.value)} />
                </div>
                
            </div>
            
                <Card key={produto.id} excluir={excluir} id={produto.id} imagem={produto.imagem} nome={produto.nome} descricao={produto.descricao} preco={produto.preco} estoque={produto.quantidade} />
            
            </>
            )
            
    }
    return (
        <>
        <h1 className="text-center my-5">Produtos</h1>
        <div className="container mt-5">
            <div className="col-6 mx-auto">
                <input value={nome} className="form-control col-6 my-5" type="text" onChange={(evento) => setNome(evento.target.value)} />
            </div>
            
        </div>
        {produtos.map((p) => {
           return <Card key={p.id} excluir={excluir} id={p.id} imagem={p.imagem} nome={p.nome} descricao={p.descricao} preco={p.preco} estoque={p.estoque} categoria={p.categoria.nome} />
        })}
        </>
    )

}

export default ListarProdutos
