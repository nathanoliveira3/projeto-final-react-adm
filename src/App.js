import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Categorias from './Pages/Categorias';
import FormCategoria from './Pages/FormCategoria';
function App() {  

  return (
    <BrowserRouter>
    <Navbar/>    
      <Switch>
        <Route exact path="/">
          
        </Route> 
        <Route exact path="/categorias">
          <Categorias />
        </Route>
        <Route exact path="/cadastroCategoria">
          <FormCategoria />
        </Route>           
      </Switch>    
      <Footer />
  </BrowserRouter>
  );
}

export default App;
