import { useState } from "react";

const ProductAdd = (props) => {
//declaring Object and  checking it's State..
    let [prodOb,setProdOb]=useState({pid:"",pname:"",pprice:""});
    const handleChange=(event)=>{
        console.log("In Handle Change")
        let {name,value}=event.target;
        setProdOb({...prodOb,[name]:value});
    }
    //o send data from FORM to app.js to add in array
    const addData=(event)=>{
        event.preventDefault();//to stop the page refresh action of the submit button
        if(prodOb.pid==="" || prodOb.pname==="" || prodOb.pprice===""){
            alert("Please fill all values ")
            return;
        }
        //send data to prevent for adding in the array
        props.addProduct(prodOb);
        //to clear the testbox in the form
        setProdOb({pid:"",pname:"",pprice:""});
    }

    return (
    <div>
        <h1>In Product ProductAdd</h1>
        <form>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                Product ID: <input type="text" className="form-control" placeholder="Enter Prod Id" id="pid"  name="pid"
                    value={prodOb.pid}
                    onChange={handleChange}/>
                </div>
                <div class="col-md-6 mb-3">
                    Product Name: <input type="text" className="form-control" placeholder="Enter prod Name" id="pname" name="pname"
                    value={prodOb.pname}
                    onChange={handleChange}/>
                       
                </div>
                <div class="col-md-6 mb-3">
                    Product Price: <input type="text" className="form-control"  placeholder="Enter prod Price" id="pprice" name="pprice"
                    value={prodOb.pprice}
                    onChange={handleChange} />
                     
                </div>
            </div>
            <button class="btn btn-primary" type="button" onClick={addData}>Add Product</button>
        </form>
    </div>
    )
}
export default ProductAdd;