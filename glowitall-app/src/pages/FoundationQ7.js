import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const FoundationQ7 = () => {
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
               <h4 className='start-content py-4'>7. Check out the veins on your wrist. Which color is the closest match?</h4>
               
               <div className='flex-images-4b'>
               <img src="Images/purple.png" alt='picture' style={{width:"250px", height:"150px"}}/>

               <img src="Images/Green.png" alt='picture' style={{width:"250px", height:"150px"}}/>
              
               <img src="Images/Blue.png" alt='picture' style={{width:"250px", height:"150px"}}/>
          
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"140px"}}>
              <Link to='/found-Q8'>
               <button className='rec-button-image'>
                <span >Purple</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"350px"}}>
               <Link to='/found-Q8'>
               <button className='rec-button-image'>
                <span >Green</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"350px"}}>
               <Link to='/found-Q8'>
               <button className='rec-button-image'>
                <span>Blue</span>
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

export default FoundationQ7;