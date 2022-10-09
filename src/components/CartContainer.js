import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from '../features/modal/modalSlice';
import { getCartItems } from "../features/cart/cartSlice";

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((store) => store.cart)
    if (amount < 1) {
        return <section className="cart">
            <header>
                <h2>
                    your bag
                </h2>
                <h4 className="empty-cart">
                    is current empty
                </h4>
                <div className="empty-cart">
                    <button type="button" className="btn confirm-btn" onClick={() => dispatch(getCartItems())}>Reload Data</button>
                </div>
            </header>
        </section>
    }
    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(openModal())}>clear cart</button>
            </footer>
        </section>
    )
}
export default CartContainer;