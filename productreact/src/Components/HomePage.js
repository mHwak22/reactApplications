
import { NavLink} from 'react-router-dom';

const HomePage = () => {

    return (
        <div>
            <Nav>
                <a href="/">About Us</a>
                <a href="/product">Products</a>
                <a href="/addprod">Add Product</a>
                <a href="/deleteprod">Delete Product</a>
                <a href="editprod">Edit Product</a>
            </Nav>
            <div>
                Toh chliye Suru krte hain shoping
            </div>
        </div>
    )
}
export default HomePage;