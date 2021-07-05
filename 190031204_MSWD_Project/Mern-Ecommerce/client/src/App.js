import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';

function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
    <Route path='/' component={Homescreen} exact/>
    <Route path='/product/:id' component={Productdescscreen} />  
    <Route path='/cart' component={Cartscreen} />  
    <Route path='/register' component={Registerscreen} />
    <Route path='/login' component={Loginscreen} />
    </BrowserRouter>
    
    </div>
  );
}

export default App;
