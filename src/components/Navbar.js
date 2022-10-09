import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
    // деструктуризация 
    const { amount } = useSelector((store) => store.cart)

    return (
        <nav>
            <div className='nav-center'>
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
            <div className='nav-center'>
                <Link to="about">About</Link>
            </div>
            <div className='nav-center'>
                <Link to="anotherPage">Another Page</Link>
            </div>
        </nav>

    );
}

export default Navbar;