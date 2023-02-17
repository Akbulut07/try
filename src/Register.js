import React, { useState } from "react";
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput } from 'mdb-react-ui-kit';

function Register() {
  const [msisdn, setMsisdn] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [packageId, setPackageId] = useState(null);
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://ec2-54-153-33-88.us-west-1.compute.amazonaws.com:8081/api/subscribers/getSubcribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ msisdn, password ,email,name,packageId,securityQuestion,surname}),
      });
      const data = await response.json();
      console.log(data);
      history.push("/");
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <Router>
    <MDBContainer fluid>

    <MDBRow className='justify-content-center align-items-center m-5' >

      <MDBCard >
        <MDBCardBody className='px-4' onSubmit={handleSubmit}>

          <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

          <MDBRow>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </MDBCol>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text' value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </MDBCol>
            

          </MDBRow>

          <MDBRow>

            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </MDBCol>
            <MDBCol md='6'>
              <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='text' placeholder='Enter your number withou 0' value={msisdn} onChange={(e) => setMsisdn(e.target.value)}/>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='6.3' className='mb-4'>
              
            <div >
                      <label for="package">Security Question</label>
                      <select 
                        class="form-select"
                        name = "package_id"
                        id="package_id"
                        type="text"
                    
                      >
                        <option selected >Select a Question</option>
                        <option value="1">YOUR PET'S NAME</option>
                        <option value="2">YOUR FAVORITE SONG</option>
                        <option value="3">YOUR FATHER'S NAME</option>
                       
                      </select>
                      </div>
                      </MDBCol>
            <MDBCol md='6.3' className='mb-4'>
            
            <MDBInput wrapperClass='mb-4' label='Security Question' size='lg' id='form5' type='text' value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)}/>
            </MDBCol>
                    
                    
                    
            
            </MDBRow>
            
            
          

          

          <MDBCol md='6.3' className='mb-4'>
              <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='text' placeholder='name@example.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </MDBCol>

            

          
          <MDBCol md='6.3' className='mb-4'>
            
                      <label for="package">Package</label>
                      <select value={packageId} onChange={(e) => setPackageId(e.target.value)}
                        class="form-select"
                        name = "package_id"
                        id="package_id"
                        
                    
                      >
                        <option selected >Select Package</option>
                        <option value="1">SUNCELL 5GB</option>
                        <option value="2">SUNCELL 8GB</option>
                        <option value="3">SUNCELL 10GB</option>
                        <option value="4">SUNCELL 13GB</option>
                        <option value="5">SAKURA</option>
                        <option value="6">HİGANBANA 20GB</option>
                      </select>
                    
            </MDBCol>
         

          
          <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

        </MDBCardBody>
      </MDBCard>
      {error && <div>{error}</div>}
    </MDBRow>
  </MDBContainer>
  </Router>
  );
}

export default Register;
