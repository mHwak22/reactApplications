// import { useState } from "react";
import { useState } from "react";
import {Cart3, Link, PencilFill, Trash3 } from "react-bootstrap-icons";
import ProductEdit from "./ProductEdit";

const ProductList = (props) => {
    console.log(props);

    let [displayFlag, setflag]=useState(false);
    let [prodOb,setProdOb]=useState({pid:"",pname:"",price:""});
   
    //renderList fuction so that can display array of object into a table by iterator 
    const renderList = () => {

        const deleteProd=(id)=>{
            props.removeData(id);
        }

        return props.products.map((prod)=>{
            return <tr key={prod.pid}>
                <td><Cart3></Cart3></td>
                <td>{prod.pid}</td>
                <td>{prod.pname}</td>
                <td>{prod.price}</td>
                <Link to>
                <td className="col-md-2" onClick={()=>{editProd(props.products)}}><PencilFill></PencilFill></td></Link>
                <td className="col-md-2" onClick={()=>{deleteProd(props.products.pid)}}><Trash3></Trash3></td>
            </tr>
        });
    }
        const modifyData=(ob)=>{
            props.updateProd(ob);
            setflag(false);
        
    }

    return (
        <div>
            <div>
            {/* <h1>In Product List</h1> */}
            <table border="2px solid black">
                <tr><th></th>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {renderList()}
            </table>
            </div>
            {displayFlag?(<div> 
                <ProductEdit prod={prodOb} modifyProd={modifyData}></ProductEdit> </div>):""};
        </div>
    );

}
export default ProductList;