import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/card/:username/:reponame" component={Card}/>
            <Redirect to={'/'} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
