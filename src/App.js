import logo from './logo.svg';
import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Main/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      {/* <Main></Main> */}
      <BrowserRouter>
      <Nav></Nav>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/gallery' component={Gallery}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
