import { Link } from "react-router-dom";
import LogoToHome from "../logo/LogoToHome";

const BtnToHome = () => {
    return (
        <Link className="btn-to-home flex" to='/'>
            <LogoToHome />
        </Link>
    );
}

export default BtnToHome;