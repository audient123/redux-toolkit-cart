import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="cart">
            <h2>Error</h2>
            <h4>This page doesn't exist.
                Go <Link to="/"><span>home</span></Link>.
            </h4>
        </div>
    )
}

export default NotFoundPage;