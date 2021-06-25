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

    const [categoria, setCategoria] = useState('')

    const obterCategorias = () => {

        http.get('categoria')
            .then(response => setCategorias(response.data))
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        obterCategorias()
    }, []);


    const cadastrar = (e) =>{
        e.preventDefault()

        const produto = {
            codigo: codigo,
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            imagem: imagem,
            categoria: categoria
        }

        http.post('produto', produto)
            .then(response => {
                console.log(response.data); 
            })
        
            // setCodigo('')
            // setNome('')
            // setDescricao('')
            // setImagem('')
            // setQuantidade('')
            // setImagem('')
    }



    return (
        <form onSubmit={cadastrar} className="col-6 mx-auto">
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
                <input className="form-control" min={0} type="number" value={preco} onChange={e => setPreco(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Quantidade</label>
                <input className="form-control" min={0} type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Imagem</label>
                <input className="form-control" type="url" value={imagem} onChange={e => setImagem(e.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Categoria</label>
                <select className="form-control" value={categoria} onChange={e => setCategoria(e.target.value)} >
                    {categorias.map((c, index) => {
                        
                        return <option key={index} value={c.id} >{c.nome}</option>

                        // return <ListarCategorias key={c.id} nome={c.nome} onChange={} />
                    })}
                </select>
            </div>
            <div>
                <button className="btn btn-dark">
                    Cadastrar
                </button>
            </div>
        </form>
    )
}

export default FormProduto