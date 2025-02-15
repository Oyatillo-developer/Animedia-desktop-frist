import { Routes, Route } from "react-router-dom";
import Navbar from "./page/navbar";
import Home from "./page/home";
import Kontent from "./page/kontent";
import './index.scss'
import Info from "./page/info";
import Signin from "./page/signin";
import Login from "./page/login";


function Proyect() {
    return ( <>
    <Routes>
        <Route path="/" element={<> <Navbar/> <Home/> <Kontent/> <Info/> </>}/>
        <Route path="/signin" element={<> <Signin/> </>}/>
        <Route path="/login" element={<> <Login/> </>}/>
    </Routes>
    </> );
}

export default Proyect;