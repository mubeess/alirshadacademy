import logo from './logo.svg';
import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Main/Home';


function App() {
  return (
    <div className="App">
      {/* <Main></Main> */}
      <BrowserRouter>
      <Nav></Nav>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
