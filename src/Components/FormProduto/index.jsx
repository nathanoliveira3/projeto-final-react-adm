import { useState, useEffect } from "react"
import http from "../../http"
import ListarCategorias from "../../Components/ListarCategorias"

const FormProduto = () => {

    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [imagem, setImagem] = useState('')

    const [categorias, setCategorias] = useState([])

    const obterCategorias = () => {


        http.get('categoria')
            .then(response => setCategorias(response.data))
            .catch(erro => console.log(erro))
        console.log(categorias);
    }

    useEffect(() => {
        obterCategorias()
    }, []);


    return (
        <form className="col-6 mx-auto">
            <div className="mb-3">
                <label className="form-label">Codigo</label>
                <input className="form-control" type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input className="form-control" type="text" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Descrição</label>
                <input className="form-control" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Preço</label>
                <input className="form-control" type="number" value={preco} onChange={e => setPreco(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Quantidade</label>
                <input className="form-control" type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Imagem</label>
                <input className="form-control" type="url" value={imagem} onChange={e => setImagem(e.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Categoria</label>
                <select className="form-control ">
                    {categorias.map((c) => {
                        return <ListarCategorias key={c.id} nome={c.nome} id={c.id} />
                    })}
                </select>
            </div>
        </form>
    )
}

export default FormProduto