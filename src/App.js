import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Produtos from './Pages/Produtos';
function App() {  

  return (
    <BrowserRouter>
    <Navbar/>    
      <Switch>
        <Route exact path="/produtos">
          <Produtos />
        </Route>        
      </Switch>    
      <Footer />
  </BrowserRouter>
  );
}

export default App;
