import React from "react";
import {NavLink} from "react-router-dom";


function Login(){
    return(<>

        <div id="loginwindow">
          <div className="loginbox">
            <span className="closelogin">×</span>
            <div className="login_1">
              <h1>Welcome to Skyshot</h1><br />
              <form>
                <input type="email" name id placeholder="Email" /><br /><br />
                <input type="password" name id placeholder="password" /><br /><br />
                <input type="submit" id="login_1_1" defaultValue="LOGIN" /><br /><br />
              </form>
              <NavLink to="/Demat"><button id="signup">Signup</button></NavLink>
              <br />
              <p>Or</p>
              <br />
              <button id="ContinueGoogleBtn"> <img width="20px" style={{marginBottom: '3px', marginRight: '5px'}} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                Continue with Google</button><br />
            </div>
          </div>
        </div>
        
    </>)
}

function Signup(){
    return(
        <>
        <div id="signupwindow">
          <div className="signupbox">
            <span className="closesignup">×</span>
            <nav className="signup_1">
              <h1>heading</h1>
              <form>
                <input type="text" name="name" placeholder="Name" required /><br /><br />
                <fieldset>
                  <legend>Gender *</legend>
                  <p>
                    Male <input type="radio" name="gender" id="male" required /><br /><br />
                    Female <input type="radio" name="gender" id="female" required />
                  </p>
                </fieldset><br />
                <input type="email" name="email" id="email" placeholder="email" required /><br /><br />
                <input type="createpassword" name id placeholder="createpassword" /><br /><br />
                <input type="confirmpassword" name id placeholder="confirmpassword" /><br /><br />
                <input type="submit" id="signup2" defaultValue="Signup" /><br /><br />
              </form>
              <button id="login2">Login</button>
            </nav>
          </div>
        </div>  
        </>
    )
}

export default Login;
export {Signup}


