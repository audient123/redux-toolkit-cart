import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CartContainer from "./components/CartContainer";
import {useDispatch, useSelector} from "react-redux";
import {calculateTotals, getCartItems} from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const {cartItems, isLoading} = useSelector((store)=>store.cart);
  const {isOpen} = useSelector((store)=>store.modal);
  const dispatch = useDispatch();
  
  // будет вызываться каждый раз, когда будут изменения с [cartItems]
  useEffect(()=>{
    dispatch(calculateTotals());
  }, [cartItems])

  // вызывается только тогда, когда прогружается приложение
  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('persist:root'));
    if (!items) {
      dispatch(getCartItems());
      return;
    }
  }, [])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
    {/* conditional rendering */}
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>
  ) 
}
export default App;