import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const SkinQ5 = () => {
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
              <div className="col-7 text-content" >
               <h4 className='Start-content py-2'>5. Is your Skin Sensitive?</h4>
               <div className='button-holder py-3'>
               <Link to="/Skin-Q6">
               <button className='rec-button' >
                <span >YES</span>
               </button>
               </Link>
               </div>
               <div className='button-holder py-3'>
              <Link to="/Skin-Q7">
               <button className='rec-button' >
                <span >NO</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://static-bebeautiful-in.unileverservices.com/how-to-care-for-sensitive-skin_14.jpg" alt='picture' style={{width:"100%"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default SkinQ5;