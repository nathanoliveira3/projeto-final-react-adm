import { useState, useEffect } from "react"
import http from "../../http"
import ListarCategorias from "../../Components/ListarCategorias"
import MensagemSucesso from '../../Components/MensagemSucesso'

const FormProduto = () => {

    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [imagem, setImagem] = useState('')

    const [categorias, setCategorias] = useState([])

    const [categoria, setCategoria] = useState('')
    const [mensagem, setMensagem] = useState('')

    const obterCategorias = () => {

        http.get('categoria')
            .then(response => setCategorias(response.data))
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        obterCategorias()
    }, []);


    const cadastrar = (e) => {
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
            .then(() => {
                setMensagem('Produto Cadastrado!')
                setTimeout(() => {
                    setMensagem('')
                }, 4500)

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
            <h1 className="text-center my-5">Cadastrar Produto</h1>
            <div className="mb-3">
                <label className="form-label">Codigo</label>
                <input className="form-control" type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input className="form-control" type="text" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Descri????o</label>
                <input className="form-control" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Pre??o</label>
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

export default FormProduto