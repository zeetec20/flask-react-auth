import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './page/Home'
import Register from './page/Register'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            login
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
