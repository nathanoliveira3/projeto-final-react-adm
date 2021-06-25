import ListarProdutos from "../../Components/ListarProdutos"
import { Link} from 'react-router-dom'

const Produtos = () => {

    return (
        <>
             <div className="d-flex justify-content-center mt-5">
                <Link className="btn btn-dark" to='/cadastroProduto'>CADASTRAR NOVO PRODUTO</Link>
            </div>
            <ListarProdutos />
           
        </>
    )

}

export default Produtos
