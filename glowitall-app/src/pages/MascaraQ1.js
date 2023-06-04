import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const MascaraQ1 = () => {
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
            <div className='content py-2'>
              <div className="col-12 text-content-image">
               <h4 className='start-content py-2'>1. Which is your preferred lash look?</h4>
               
               <div className='flex-images-m2'>
               <img src="/Images/lightlash.jpg" alt='picture' style={{width:"300px", height:"100px"}}/>

               <img src="/images/falselash.jpg" alt='picture' style={{width:"300px", height:"100px"}}/>
              
               <img src="/images/longlashes.jpg" alt='picture' style={{width:"300px", height:"100px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"155px"}}>
              <Link to='/Mas-Q2'>
               <button className='rec-button-image' style={{width:"140px"}} >
                <span >Natural & Stuble </span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"230px"}}>
               <Link to='/Mas-Q2'>
               <button className='rec-button-image' style={{width:"140px"}} >
                <span >False Lash Effect</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"240px"}}>
                <Link to='/Mas-Q2'>
               <button className='rec-button-image' style={{width:"140px"}} >
                <span >Long & Defined </span>
               </button>
               </Link>
               </div>
            </div>

            <div className='flex-images-m2'>
               <img src="/images/curledlashes.jpg" alt='picture' style={{width:"300px", height:"100px"}}/>

               <img src="/images/wingedlashes.jpg" alt='picture' style={{width:"300px", height:"100px"}}/>
              
               <img src="/images/boldlashes.jpg" alt='picture' style={{width:"300px", height:"100px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"155px"}}>
              <Link to='/Mas-Q2'>
               <button className='rec-button-image' style={{width:"140px"}} >
                <span >Big & Curled</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"235px"}}>
               <Link to='/Mas-Q2'>
               <button className='rec-button-image' style={{width:"140px"}} >
                <span >Flarred & Winged</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"240px"}}>
               <Link to='/Mas-Q2'>
               <button className='rec-button-image-8' style={{width:"140px"}} >
                <span >Bold & Dramatic</span>
               </button>
               </Link>
               </div>
            </div>
          </div>
         </div>
        </div>
      </Container>

    </>
  )
}

export default MascaraQ1;