import React from 'react'
import '../../styles/Footer.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';

const Footer = () => {
  const gradientStyle = {
    background: 'linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)',
    color: '#FFFFFF',
  };
  return (
    <>
    <MDBFooter className='text-center text-lg-start text-muted' 
    style={gradientStyle}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "#FFFFFF"}}>
                Trafalgar
              </h6>
              <p style={{color: "#FFFFFF"}}>
              Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online <br/>
              for everyone
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "#FFFFFF"}}>Company</h6>
              <p style={{color: "#FFFFFF"}}>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  About
                </a>
              </p>
              <p style={{color: "#FFFFFF"}}>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Testimonials
                </a>
              </p>
              <p style={{color: "#FFFFFF"}}>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Find a doctor
                </a>
              </p>
              <p style={{color: "#FFFFFF"}}>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Apps
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "#FFFFFF"}}>Region</h6>
              <p style={{color: "#FFFFFF"}}>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Indonesia
                </a>
              </p>
              <p style={{color: "#FFFFFF"}}>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Singapore
                </a>
              </p>
              <p style={{color: "#FFFFFF"}}>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  HongKong
                </a>
              </p>
              <p style={{color: "#FFFFFF"}}>
                <a href='#!' className='text-reset' style={{textDecoration: "none"}}>
                  Canada
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color: "#FFFFFF"}}>Help</h6>
              <p style={{color: "#FFFFFF"}}>
                Help center
              </p>
              <p style={{color: "#FFFFFF"}}>
                Contact support

              </p>
              <p style={{color: "#FFFFFF"}}>
                Instructions
              </p>
              <p style={{color: "#FFFFFF"}}>
                How it works
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{color: "#FFFFFF" , marginRight: "1000px" , marginBottom: "500px" }}>
      ©Trafalgar PTY LTD 2020. All rights reserved
      </div>
      </MDBFooter>
    </>
  )
}

export default Footer