import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import HomePage from "./Components/HomePage"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductAdd from "./Components/ProductAdd"
import ProductEdit from "./Components/ProductEdit"
import ProductList from "./Components/ProductList"
import ProductDelete from "./Components/ProductDelete"
import {useState} from "react"


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [prodarr, setprodarr] = useState([
    {
      pid: "101",
      pname: "Computer",
      price: "150000"
    },
    {
      pid: "102",
      pname: "Laptop",
      price: "80000"
    },
    {
      pid: "103",
      pname: "Mobile",
      price: "15000"
    },
    {
      pid: "104",
      pname: "Heater",
      price: "500"
    },
    {
      pid: "105",
      pname: "Trimmer",
      price: "1000"
    },
    {
      pid: "106",
      pname: "Tablet",
      price: "20000"
    }
  ])



  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/addprod" exact component={ProductAdd}></Route>
          <Route path="/editprod" exact component={ProductEdit}></Route>
          <Route path="/deleteprod" exact component={ProductDelete}></Route>
          <Route path="/product" exact component={ProductList}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
