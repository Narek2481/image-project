import { Link, Route, Routes } from "react-router-dom";
import About_us from "../About_us"
import Sign_in from "../sign_in/Sign_in"
import Registration from "../Registration/Registration"

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li>Logo</li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to="About_us">About us</Link>
                    </li>
                    <li>
                        <Link to="Sign_in">Sign in</Link>
                    </li>
                    <li>
                        <Link to="Registration">Registration</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element></Route>
                <Route path="/About_us/*" element={<About_us></About_us>}></Route>
                <Route path="/Registration/*" element={<Registration/>}></Route>
                <Route path="/Sign_in/*" element={<Sign_in/>}></Route>
            </Routes>
        </>
    );
}


