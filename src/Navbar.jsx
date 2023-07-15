import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    // const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-1 sticky-top" style={{backgroundColor: "black"}}>
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-3 px-2 text-white" to="/"><img  style={{ width: 200, height: 50 }} src={require("./images/skyshot.png")  } /></NavLink>
                <button className="navbar-toggler mx-2 btn-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/Stocks">Stocks </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/MutualFund">Mutual Funds </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/IPO"> IPO</NavLink>
                        </li>
                        
                        {/* <li className="nav-item dropdown">
                            
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div class="dropdown-menu m-auto my-2 text-center " style={{backgroundColor: "#d3f1e89c"}} aria-labelledby="navbarDropdownMenuLink">
                                <Link class="btn btn-light btn-block " style={{backgroundColor: "#d3f1e89c"}} to="/Grocery" >Grocery</Link><br/>
                                <Link class="btn btn-light btn-block" style={{backgroundColor: "#d3f1e89c"}} to="/Mobiles" >Mobiles</Link><br/>
                                <Link class="btn btn-light btn-block" style={{backgroundColor: "#d3f1e89c"}} to="/Electronics" >Electronics</Link><br/>
                                <Link class="btn btn-light btn-block" style={{backgroundColor: "#d3f1e89c"}} to="/Furniture" >Furniture</Link>
                            </div>
                            
              
                        </li> */}

                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/News">News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/contact">About Us</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn m-2 text-white"><i className="fa fa-sign-in-alt mr-1 "></i> Login</NavLink>
                        <NavLink to="/signup" className="btn m-2 text-white"><i className="fa fa-user-plus mr-1"></i> Open Demat Account </NavLink>
                        {/* <NavLink to="/cart" className="btn  m-2 text-white"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink> */}
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar