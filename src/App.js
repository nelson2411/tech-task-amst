import logo from "./logo.svg"
import "./App.css"
import { Route, Switch } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import ModalComponent from "./components/ModalComponent"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
