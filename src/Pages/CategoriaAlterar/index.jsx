import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import http from '../../http';
import MensagemSucesso from '../../Components/MensagemSucesso'
const CategoriaAlterar = () => {
    const { id } = useParams()
    const [categoria, setCategoria] = useState({})
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [mensagem, setMensagem] = useState('')

    const obterCategoria = () => {
        http.get('categoria/'+id)
        .then(response => {
            setCategoria(response.data)
            setNome(response.data.nome)
            setDescricao(response.data.descricao)
        })
    }

    useEffect(() => {
        obterCategoria()
    }, [id])

    const salvar = () => {
        const categoria = {
            nome: nome,
            descricao: descricao
        }
        http.put('categoria/'+id, categoria)
        .then(() => {
            setMensagem('Categoria alterada!')
            setTimeout(() => {
                setMensagem('')
            }, 4500)
        })            
    
        
    }

    return(
        <div className="container container-form mt-5">
            <form>
            <h1 className="text-center mb-5">Alteração de categoria</h1>
                <div className="mb-3">
                    <label className="form-label">Nome da Categoria</label>
                    <input type="text" className="form-control" value={nome} onChange={(evento) => setNome(evento.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descrição da Categoria</label>
                    <input type="text" className="form-control" value={descricao} onChange={(evento) => setDescricao(evento.target.value)} />
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-dark" onClick={salvar}>Enviar</button>
                </div>
            </form>
            {mensagem && <MensagemSucesso msg={mensagem} />}
        </div>
    )
}

export default CategoriaAlterar