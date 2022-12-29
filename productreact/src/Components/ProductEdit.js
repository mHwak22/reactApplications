import { useState } from "react";

const ProductEdit = (props) => {
    let [prodOb, setProdOb] = useState(props.products);

    const handleChange = (event) => {
        console.log("in ProductEdit hanglechange");
        const { name, value } = event.target
        setProdOb({ ...prodOb, [name]: value });}
        //[name] is the key and "value" is the value which will be assigned to the key..
        //[name]is the name of the input through which will enter the data and push it to the list or array
        //2 way binding is a method of communication through which we parent component can communicate with the chlid component and visa-versa
        //both are allowed to mutate data

        const updateProduct=((prodOb)=>{
            props.modifyProd(prodOb);
            //here ProductEdit(child Component) recived the data from ProductList(parent component of ProductEdit)
            //props is a method of communication b/w the components (parent and child)
            setProdOb({pid:"",pname:"",price:""})
        });
    
    return (
        <div>
            <h1>In Product ProductEdit</h1>
            <form>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        Product ID: <input type="text" className="form-control" placeholder="Enter Prod Id" id="pid" name="pid"
                            value={prodOb.pid}
                            onChange={handleChange} />
                    </div>
                    <div class="col-md-6 mb-3">
                        Product Name: <input type="text" className="form-control" placeholder="Enter prod Name" id="pname" name="pname"
                            value={prodOb.pname}
                            onChange={handleChange} />

                    </div>
                    <div class="col-md-6 mb-3">
                        Product Price: <input type="text" className="form-control" placeholder="Enter prod Price" id="price" name="price"
                            value={prodOb.price}
                            onChange={handleChange} />

                    </div>
                </div>
                <button class="btn btn-primary" type="button" onClick={()=>updateProduct(prodOb)}>Update Product</button>
            </form>
        </div>
    )
}
export default ProductEdit;