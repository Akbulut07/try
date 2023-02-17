import { useState } from "react";
import resim1 from "./logo.png";
import { MDBBtn, MDBContainer,MDBRow,MDBCol,MDBInput,MDBFooter,MDBIcon} from 'mdb-react-ui-kit';
//import {  Link } from "react-router-dom";
import './app.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Register from "./Register";






function App() {
  
 
  
  const[MSISDN,setMSISDN] = useState('')
  const [password,setPassword] = useState('')
  const handleLogin = e  =>{
    e.preventDefault()

    
    fetch(`http://ec2-54-153-33-88.us-west-1.compute.amazonaws.com:8081/api/auth/login?MSISDN=${MSISDN}&password=${password}`,{
      //mode:'no-cors',
      method: 'GET',
      /*headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }*/
      
    },JSON.stringify({ MSISDN, password })) 
    .then((Response) => Response.json())
    .then((data,psw) => this.setState({ MSISDN: data },{ password: psw })) 
    
     
   
    
    }
   


  return (
    
    <Router>
    <MDBContainer className="my-5 gradient-form">

    <MDBRow>

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column ms-5">

          <div className="text-center">
          <img src={resim1}
                style={{width: '185px'}} alt="logo" />
            <h4 className="mt-1 mb-5 pb-1">We are The Suncell Team</h4>
          </div>

          <p>Please login to your account</p>

           
          <MDBInput wrapperClass='mb-4' label='Phone Number' id='form1' type="text" value={MSISDN} onChange={e => setMSISDN(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type="text" value={password} onChange={e => setPassword(e.target.value)}/>
         

          <div className="text-center pt-1 mb-5 pb-1">
            
            <MDBBtn className="mb-4 w-100 gradient-custom-2" type="button" onClick={handleLogin}>Sign in</MDBBtn>
            
            <a className="text-muted" href="#!">Forgot password?</a>
          </div>
          
          
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
          
            <p className="mb-0">Don't have an account? </p>
            
            
            <MDBBtn outline className='mx-2' color='danger'>
              Register
              
              

              
            
              
            </MDBBtn>
            
            
            
            
            
          </div>
          
          

        
        </div>

      </MDBCol>

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

          <div className="text-white px-3 py-4 p-md-5 mx-md-4">
            <h4 class="mb-4">We are more than just a company</h4>
            <p class="small mb-0">It started as a venture project created by 15 young entrepreneurial engineers.
set out with fast, reliable and nature-friendly principles and
More than 13 million users currently provide services. The next target is to reach 20 million users in the first 5 years
            </p>
          </div>

        </div>

      </MDBCol>

    </MDBRow>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                5G
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Policy & Charging Control
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Revenue Management
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Data Security
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 istanbul, Kadıköy, TR
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contact@suncell.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />  0216 253 14 52
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />  0216 485 78 87
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        SUNCELL All Rights Reserved
        </a>
      </div>
    </MDBFooter>
    <Register/>

  </MDBContainer>
  
  </Router>
  
	
	
    
  );
}

export default App;
