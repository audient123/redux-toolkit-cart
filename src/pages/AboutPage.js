import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="cart">
            <h2>About us</h2>
            <h4>
                This is a demo website about redux-toolkit.
                Go <Link to="/"><span>home</span></Link>. 
            </h4>
        </div>
    )
}

export default AboutPage;