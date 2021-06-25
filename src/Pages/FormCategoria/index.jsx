import { useState } from 'react'
import http from '../../http'
import './estilos.css'
import MensagemSucesso from '../../Components/MensagemSucesso'
const FormCategoria = () => {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [mensagem, setMensagem] = useState('')

    const salvar = (evento) => {
        evento.preventDefault()
        const categoria = {
            nome: nome,
            descricao: descricao
        }
        http.post('categoria', categoria)
            .then(() => {
                setMensagem('Categoria Cadastrada!')
                setTimeout(() => {
                    setMensagem('')
                }, 4500)
            }               
        )

        


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
                    <button className="btn btn-dark mb-3" onClick={salvar}>Enviar</button>
                </div>
            </form>
            {mensagem && <MensagemSucesso msg={mensagem} />}
        </div>
    )
}

export default FormCategoria