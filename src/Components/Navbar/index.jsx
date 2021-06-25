import { Link, useHistory } from 'react-router-dom'

const Navbar = () => {    
 
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/produtos">Produtos</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link" to='/categorias'>Categorias</Link>
                    </li>             
                    
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;