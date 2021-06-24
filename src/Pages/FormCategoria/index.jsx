import { useState } from 'react'
import http from '../../http'
import './estilos.css'
const FormCategoria = () => {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const salvar = () => {
        const categoria = {
            nome: nome,
            descricao: descricao
        }
        http.post('categoria', categoria)
    }

    return (
        <div className="container container-form mt-5">
            <form>
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
        </div>
    )
}

export default FormCategoria