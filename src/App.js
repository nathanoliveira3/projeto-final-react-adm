import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Produtos from './Pages/Produtos';
import Categorias from './Pages/Categorias';
import FormCategoria from './Pages/FormCategoria';
import FormProduto from './Components/FormProduto';
import CategoriaAlterar from './Pages/CategoriaAlterar';
import ProdutoAlterar from './Pages/ProdutoAlterar';
import Home from './Pages/Home';
function App() {  

  return (
    <BrowserRouter>
    <Navbar/>    
      <Switch>
        <Route exact path="/produtos">
          <Produtos />
        </Route>        
        <Route exact path="/">
          <Home />
        </Route> 
        <Route exact path="/categorias">
          <Categorias />
        </Route>
        <Route exact path="/cadastroCategoria">
          <FormCategoria />
        </Route>
        <Route exact path="/cadastroProduto">
          <FormProduto />
        </Route> 
        <Route exact path="/alterarCategoria/:id">
          <CategoriaAlterar />
        </Route> 
        <Route exact path="/alterarProduto/:id">
          <ProdutoAlterar />
        </Route>            
      </Switch>    
      <Footer />
  </BrowserRouter>
  );
}

export default App;
