import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { NavLink,Link } from 'react-router-dom'


export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-light' style={{ backgroundColor: '#000000' }}>
      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='#' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-1 mb-0'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-0'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SKYSHOT PVT LTD
              </h6>
              <p>
              SkyShot: Elevate your trading game with our powerful app, providing lightning-fast execution and real-time market insights for traders on the rise.
              </p>
            </MDBCol>

            

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-0'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <NavLink className='text-reset' to="/Stocks">Stocks</NavLink>
              </p>
              <p>
              <NavLink className='text-reset' to="/IPO">IPO</NavLink>
              </p>
              <p>
              <NavLink className='text-reset' to="/News">News</NavLink>
              </p>
              
              <p>
              <NavLink className='text-reset' to="/AboutUs">AboutUs</NavLink>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="2" xl="3" className='mx-auto mb-md-0 mb-0'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Bharati Vidyapeeth's College Of Engineering, New Delhi
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Skyshottrading@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:  <NavLink className='text-reset' to="/">Skyshottrading.com</NavLink>
        
      </div>
    </MDBFooter>
  );
}