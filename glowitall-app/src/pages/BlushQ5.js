import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const BlushQ5 = () => {
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
               <h4 className='Start-content py-2' style={{marginLeft:"35px"}}>5. Choose your Makeup Brand!</h4>
              <div className='display-button'>
              <div className='button-holder btn-space py-3' >
              <Link to='/Blush-Q6'>
               <button className='rec-button' >
                <span >Maybelline</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3' >
               <Link to='/Blush-Q6'>
               <button className='rec-button' >
                <span >M Misbah</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='display-button'>
              <div className='button-holder btn-space py-3'>
              <Link to='/Blush-Q6'>
               <button className='rec-button' >
                <span >Rivaj</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3'>
               <Link to='/Blush-Q6'>
               <button className='rec-button' >
                <span >Huda Beauty</span>
               </button>
               </Link>
               </div>
              </div>
               <div className='button-holder py-3' style={{marginLeft:'70px'}}>
               <Link to='/Blush-Q6'>
               <button className='rec-button' >
                <span >Choose Any</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/cosmetic-brush-cloud-pink-powder-dark-background_23-2148209048.jpg?size=626&ext=jpg&uid=R97680113&ga=GA1.1.1059806880.1679947817&semt=ais" alt='picture' style={{width:"100%",height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default BlushQ5;