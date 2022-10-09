import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import CartContainer from "../components/CartContainer";
import { useSelector } from "react-redux";

const HomePage = () => {
    const { isOpen } = useSelector((store) => store.modal);
    return (
        <main>
            {/* conditional rendering */}
            {isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </main>
    )
}

export default HomePage;