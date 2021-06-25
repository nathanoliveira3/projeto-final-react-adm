import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import http from "../../http"
import MensagemSucesso from '../../Components/MensagemSucesso'
const ProdutoAlterar = () => {
    const { id } = useParams()
    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [imagem, setImagem] = useState('')

    const [categorias, setCategorias] = useState([])
    const [categoria, setCategoria] = useState('')

    const [produto, setProduto] = useState({})
    const [mensagem, setMensagem] = useState('')

    const obterCategorias = () => {

        http.get('categoria')
            .then(response => setCategorias(response.data))
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        obterCategorias()
    }, []);

    const obterProduto = () => {
        http.get('produto/' + id)
            .then(response => {
                setProduto(response.data)
                setCodigo(response.data.codigo)
                setNome(response.data.nome)
                setDescricao(response.data.descricao)
                setPreco(response.data.preco)
                setQuantidade(response.data.estoque)
                setImagem(response.data.imagem)
            })
    }

    useEffect(() => {
        obterProduto()
    }, [id])

    const alterar = () => {
        const produto = {
            codigo: codigo,
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            imagem: imagem,
            categoria: categoria
        }
        http.put('produto/' + id, produto)
            .then(() => {
                setMensagem('Produto alterado!')
                setTimeout(() => {
                    setMensagem('')
                }, 4500)
            })
    }

    return (        
        <form onSubmit={alterar} className="col-6 mx-auto mt-5">
            <h1 className="text-center mb-5">Alteração de produto</h1>
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
                    <option value={''}>
                        Selecione
                    </option>
                    {categorias.map((c, index) => {

                        return <option key={index} value={c.nome} >{c.nome}</option>

                    })}
                </select>
            </div>
            <div className="mb-4">
                <button className="btn btn-dark">
                    Cadastrar
                </button>
            </div>
            {mensagem && <MensagemSucesso msg={mensagem} />}
        </form>
    )
}

export default ProdutoAlterar