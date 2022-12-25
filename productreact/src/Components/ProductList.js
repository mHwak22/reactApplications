import { PencilFill, Cart, Trash3 } from "react-bootstrap-icons"

const ProductList = () => {

    const renderList = () => {
        return prodarr.map((prod) => {
            return <tr key={prod.pid}>
                <td><Cart></Cart></td>
                <td>{prod.pid}</td>
                <td>{prod.pname}</td>
                <td>{prod.pprice}</td>
                <td><PencilFill></PencilFill></td>
                <td><Trash3></Trash3></td>
            </tr>
        })
    }
    return (
        <div>
            <table>
                <tr>
                    <th></th>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Edit Product</th>
                    <th>Delete Product</th>
                </tr>
                {renderList()}
            </table>
        </div>
    )
}
export default ProductList;