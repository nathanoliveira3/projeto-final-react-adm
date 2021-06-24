import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {  

  return (
    <BrowserRouter>
    <Navbar/>    
      <Switch>
        <Route exact path="/">
          
        </Route>        
      </Switch>    
      <Footer />
  </BrowserRouter>
  );
}

export default App;
