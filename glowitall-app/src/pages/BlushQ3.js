import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const BlushQ3 = () => {
  return (
    <>
      <Meta title={"Welcome"} />
      <Container class1="cart-wrapper home-wrapper-2 py-1">
        <div className="row">
          <div className="col-12">
            <div className='strip '>
              <h1 className="Start-title">BEAUTY STUDIO</h1>
            </div>
            </div>
            <div className='content py-4'>
              <div className="col-7 text-content-q2" >
               <h4 className='Start-content py-2'>3. What kind of Coverage do you crave?</h4>
               <div className='button-holder py-3' >
               <Link to='/Blush-Q4'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Sheer</span>
               </button>
               </Link>
               </div>
               <div className='button-holder py-3' >
               <Link to='/Blush-Q4'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Buildable</span>
               </button>
               </Link>
               </div>
              
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/beautiful-woman-face_1150-8441.jpg?w=740&t=st=1679954298~exp=1679954898~hmac=874743cf5c81f04597969f4031b63bafed2af2996e4bb7446768b2e5a9017d30" alt='picture' style={{width:"100%",height:"350px"}}/>
                
              </div>
              
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default BlushQ3;