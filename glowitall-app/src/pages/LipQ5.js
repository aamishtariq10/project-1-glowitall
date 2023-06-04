import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const LipQ5 = () => {
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
               <h4 className='Start-content py-2' style={{marginLeft:"60px"}}>5. Choose your Makeup Brand!</h4>
              <div className='display-button'>
              <div className='button-holder btn-space py-3' >
              <Link to='/Lip-Q6'>
               <button className='rec-button' >
                <span >Maybelline</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3' >
               <Link to='/Lip-Q6'>
               <button className='rec-button' >
                <span >M Misbah</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='display-button'>
              <div className='button-holder btn-space py-3'>
              <Link to='/Lip-Q6'>
               <button className='rec-button' >
                <span >Rivaj</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3'>
               <Link to='/Lip-Q6'>
               <button className='rec-button' >
                <span >Huda Beauty</span>
               </button>
               </Link>
               </div>
              </div>
               <div className='button-holder py-3' style={{marginLeft:'70px'}}>
               <Link to='/Lip-Q6'>
               <button className='rec-button' >
                <span >Choose Any</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/top-view-lipsticks-assortment_23-2148978115.jpg?w=740&t=st=1679862007~exp=1679862607~hmac=4c32a83847fea1a4c12e0b3d59fa0ec4472f58e3fb2cdc17e556895c2428c1c1" alt='picture' style={{width:"100%",height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default LipQ5;