import React from "react";
import { NavLink,Link } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom " >

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='10' md='5  '>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <NavLink className="link-danger" to='/signup'>Register</NavLink></p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

// export default App;




function Signup() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-3 display-4 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Accelerate Your Financial Potential: <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}> Open Your Demat Account Now!</span>
          </h1>

          <p className='px-3 ' style={{color: 'hsl(218, 81%, 85%)'}}>
          <h4>"Unlock a world of limitless possibilities. Open your Demat account today and seize the power to invest, trade, and grow your wealth like never before. Start your financial journey with us and embark on a path to financial freedom."</h4>
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Mobile Number' id='form5' type='number'/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>
              <MDBInput wrapperClass='mb-4' label='PAN Number' id='form5' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Aadhar Card Number' id='form6' type='number'/>

              

              <MDBBtn className='w-100 mb-4' size='md'>Open Account</MDBBtn>

              

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}



export default Login;
export {Signup}


