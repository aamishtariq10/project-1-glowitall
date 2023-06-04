import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const FoundationQ5 = () => {
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
              <div className="col-12 text-content-image" >
               <h4 className='start-content py-4'>5. Select the tone palatte that best describes your skin!</h4>
               
               <div className='flex-images-7'>
               <img src="Images/lightskin.png" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="Images/mediumskin.png" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="Images/darkskin.png" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               <img src="Images/yellowskin.png" alt='picture' style={{width:"250px", height:"200px"}}/>

               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"70px"}}>
              <Link to='/found-Q6a'>
               <button className='rec-button-image' style={{width:"130px"}}>
                <span >Light Skin Tone</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"200px"}}>
               <Link to='/found-Q6b'>
               <button className='rec-button-image' style={{width:"140px"}}>
                <span >Medium Skin Tone</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"200px"}}>
               <Link to='/found-Q6c'>
               <button className='rec-button-image' style={{width:"130px"}}>
                <span>Dark Skin Tone</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"200px"}}>
               <Link to='/found-Q6d'>
               <button className='rec-button-image' style={{width:"145px"}}>
                <span >Yellowish Skin Tone</span>
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

export default FoundationQ5;