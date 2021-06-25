import { useEffect, useState } from 'react'
import http from '../../http'
import { Link } from 'react-router-dom'
import TableCategoria from '../../Components/TableCategoria'
import MensagemSucesso from '../../Components/MensagemSucesso'


const Categorias = () => {
    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState({})
    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    const obterCategorias = () => {
        http.get('categoria')
            .then(response => setCategorias(response.data))
    }

    useEffect(() => {
        obterCategorias()
    }, [])

    const excluir = (id) => {
        http.delete('categoria/' + id)
            .then(() => {
                obterCategorias()
                setMensagem('Categoria excluída!')
                setTimeout(() => {
                    setMensagem('')
                }, 4500)
            })
    }

    useEffect(() => {
        http.get('categoria?nome=' + nome)
            .then(response => setCategoria(response.data))
    })

    if (nome) {
        return (
            <div className="container mt-5">
                <h1 className="text-center my-5">Categorias</h1>
                <div className="col-6 mx-auto">
                    <input value={nome} className="form-control col-6 my-5" type="text" onChange={(evento) => setNome(evento.target.value)} />
                </div>
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
                        <TableCategoria nome={categoria.nome} descricao={categoria.descricao} id={categoria.id} excluir={excluir} />
                    </tbody>
                </table>
                <div className="d-flex justify-content-center mt-5">
                    <Link className="btn btn-dark" to='/cadastroCategoria'>CADASTRAR NOVA CATEGORIA</Link>
                </div>
                {mensagem && <MensagemSucesso msg={mensagem} />}
            </div>

        )
    }
    return (

        <div className="container mt-5">
            <h1 className="text-center my-5">Categorias</h1>
            <div className="col-6 mx-auto">
                <input value={nome} className="form-control col-6 my-5" type="text" onChange={(evento) => setNome(evento.target.value)} />
            </div>
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
                        return <TableCategoria key={index} nome={item.nome} descricao={item.descricao} id={item.id} excluir={excluir} />

                    })}
                </tbody>
            </table>
            <div className="d-flex justify-content-center mt-5">
                <Link className="btn btn-dark" to='/cadastroCategoria'>CADASTRAR NOVA CATEGORIA</Link>
            </div>
        </div>

    )
}

export default Categorias
