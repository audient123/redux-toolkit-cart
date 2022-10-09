import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AnotherPage from "./pages/AnotherPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // будет вызываться каждый раз, когда будут изменения с [cartItems]
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])

  // вызывается только тогда, когда прогружается приложение
  useEffect(() => {
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="anotherPage" element={<AnotherPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}
export default App;