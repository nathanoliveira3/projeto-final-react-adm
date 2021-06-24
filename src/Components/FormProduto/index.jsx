import { useState } from "react"

const FormProduto = () => {

    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [imagem, setImagem] = useState('')
    // const [categoria, setCategoria] = useState('')


    return (
        <form onSubmit={}>
            <label>Codigo</label>
            <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
            <label>Nome</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <label>Descrição</label>
            <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
            <label>Preço</label>
            <input type="number" value={preco} onChange={e => setPreco(e.target.value)} />
            <label>Quantidade</label>
            <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            <label>Imagem</label>
            <input type="file" value={imagem} onChange={e => setImagem(e.target.value)} />
            
            <label>Categoria</label>
            <select>

            </select>
        </form>
    )
}

export default FormProduto