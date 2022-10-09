import { Link } from "react-router-dom";

const AnotherPage = () => {
    return (
        <div className="cart">
            <h2>Another Amazing Page</h2>
            <h4>This is another amazing page.
            Go <Link to="/"><span>home</span></Link>.
            </h4>
        </div>
    )
}

export default AnotherPage;