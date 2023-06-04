import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const LashQ3 = () => {
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
               <h4 className='start-content py-4'>3. Which lash length do you prefer?</h4>
               
               <div className='flex-images-4b'>
               <img src="/images/HighDrama.png" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="/images/Lash2.png" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="/images/Lash3.png" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"120px"}}>
              <Link to='/Lash-Q4'>
               <button className='rec-button-image' style={{width:"120px" ,height:"40px"}}>
                <span >High Drama </span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"320px"}}>
               <Link to='/Lash-Q4'>
               <button className='rec-button-image' style={{width:"150px" ,height:"40px"}} >
                <span >Classic Lash Length</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"300px"}}>
               <Link to='/Lash-Q4'>
               <button className='rec-button-image' style={{width:"140px" ,height:"40px"}} >
                <span >Stuble & Natural </span>
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

export default LashQ3;