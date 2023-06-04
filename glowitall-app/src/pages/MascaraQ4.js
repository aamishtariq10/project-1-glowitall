import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const MascaraQ4 = () => {
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
               <h4 className='Start-content py-2' style={{marginLeft:"35px"}}>4. Choose your Makeup Brand!</h4>
              <div className='display-button'>
              <div className='button-holder btn-space py-3' >
                <Link to='/Mas-Q5'>
               <button className='rec-button' >
                <span >Maybelline</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3' >
               <Link to='/Mas-Q5'>
               <button className='rec-button' >
                <span >M Misbah</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='display-button'>
              <div className='button-holder btn-space py-3'>
              <Link to='/Mas-Q5'>
               <button className='rec-button' >
                <span >Rivaj</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3'>
               <Link to='/Mas-Q5'>
               <button className='rec-button' >
                <span >Huda Beaut</span>
               </button>
               </Link>
               </div>
              </div>
               <div className='button-holder py-3' style={{marginLeft:'60px'}}>
               <Link to='/Mas-Q5'>
               <button className='rec-button' >
                <span >Choose Any</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="/images/Mas.png" alt='picture' style={{width:"100%",height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default MascaraQ4;