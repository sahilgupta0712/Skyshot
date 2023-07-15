import React from "react";
import { Route,Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./Navbar";
import Login, { Signup } from "./login_signup";
import NotFound from "./NotFound";
import Livestocks from "./livestocks/stocksapp";
import { StockDetailPage } from "./livestocks/pages/StockDetailPage";
import Footer from "./Footer";
import Comingsoon from "./comingsoon";
function Main() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Stocks" element={<Livestocks/>}/>
                <Route path="/Stocks/detail/:symbol" element={<StockDetailPage />} />
                <Route path="/IPO" element={<Comingsoon/>}/>
                {/* <Route path="/MutualFund" element={<Livestocks/>}/> */}
                <Route path="/News" element={<Comingsoon/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    )
}
export default Main