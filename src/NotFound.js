import React from "react";
import { NavLink } from "react-router-dom";
// import "./notfound.css"
function NotFound(){
    return (
        <div id="Notfound">
			<div className="notfound1 m-auto">
				<h2>404</h2>
				<h4>Opps! Page not found</h4>
				<p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
				<NavLink to="/" ><span>Back To Home</span></NavLink>
                <br/>
                <br/>
			</div>
		</div>
    )
}
export default NotFound