import React from "react";
import { Route,Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./Navbar";
import SimpleSlider from "./slideshow";
import Login, { Signup } from "./login_signup";
import NotFound from "./NotFound";
// import Foot from "./Footer";




function Main() {
    return (
        <>
            <Navbar/>
            
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Stocks" element={<SimpleSlider/>}/>
                <Route path="/IPO" element={<Signup/>}/>
                <Route path="/MutualFund" element={<Login/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Demat" element={<Signup/>}/>
                <Route path="*" element={<NotFound/>}/>
              
                {/* <Route path="/IPO" element={<Home/>}/> */}
            </Routes>
            {/* <Foot/> */}

        </>
    )



}
export default Main