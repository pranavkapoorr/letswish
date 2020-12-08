import './App.css';
import Happybirthday from './components/Birthday/HappyBirthday';
import Notfound from './components/NotFound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
                <Route path="/" component={Notfound} exact />
                <Route path="/birthday/:name" component={Happybirthday} />
                <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
