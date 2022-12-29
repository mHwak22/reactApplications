import './App.css';
import Header from "./Components/Header"
import ProductAdd from "./Components/ProductAdd"
import ProductList from './Components/ProductList';
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

  const insertData=(ob)=>{
    //add ob object in the array
    setprodarr([...prodarr,{...ob}]);
    //setting array or object in array..
  }

  const editData=(ob)=>{
    let newprodarr= prodarr.map(prod=>prod.pid===ob.pid?{...ob}:{...prod});
    //creatting new product array so that when we can edit the product....here we copying all the array of object
    //whose pid(key)(prod.pid) dose't matches with the entered pid(ob.pid) 
    setprodarr(newprodarr)
    //setting the new product array to the old array.
  }

  const deleteProduct=(id)=>{
    let newprodarr=prodarr.filter(ob=>ob.pid!==id);
    setprodarr(newprodarr)
  }

  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <ProductAdd addProduct={insertData}></ProductAdd>
            {/* addProduct is the variable in which the value is coming from the child  */}
          </div>
          <div className='col-sm-12 col-md-6'>
            <ProductList products={prodarr} updateProd={editData} removeData={()=>delteProduct(prod.pid)}></ProductList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
