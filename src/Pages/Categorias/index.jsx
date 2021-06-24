import { useEffect, useState } from 'react'
import http from '../../http'
import { Link } from 'react-router-dom'
import TableCategoria from '../../Components/TableCategoria'

const Categorias = () => {
    const [categorias, setCategorias] = useState([])

    const obterCategorias = () => {
        http.get('categoria')
        .then(response => setCategorias(response.data))
    }

    useEffect(() => {
        obterCategorias()
    }, [])
    
    const excluir = (id) => {
        http.delete('categoria/'+id)
        .then(() => obterCategorias())   
    }    

    return (
        <div className="container mt-5">
            <table className="table">
            <thead>
                <tr>                    
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Excluir</th>
                    <th scope="col">Alterar</th>
                </tr>
            </thead>
            <tbody>
                {categorias.map((item, index) => {
                    return <TableCategoria key={index} nome={item.nome} descricao={item.descricao} id={item.id} excluir={excluir}  />
                    
                })}                           
            </tbody>
        </table>
            <div className="d-flex justify-content-center mt-5">
                <Link  className="btn btn-dark" to='/cadastroCategoria'>CADASTRAR NOVA CATEGORIA</Link>
            </div>
        </div>
        
    )
}

export default Categorias
