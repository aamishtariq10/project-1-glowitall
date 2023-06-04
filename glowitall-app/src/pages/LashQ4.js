import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const LashQ4 = () => {
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
               <h4 className='start-content py-4'>4. Which lash volume do you prefer?</h4>
               
               <div className='flex-images-4b'>
               <img src="/images/V1.png" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="/images/v2.png" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="/images/v3.png" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"120px"}}>
              <Link to='/Lash-Q5'>
               <button className='rec-button-image' style={{width:"120px" ,height:"40px"}}>
                <span >Just a touch </span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"330px"}}>
               <Link to='/Lash-Q5'>
               <button className='rec-button-image' style={{width:"120px" ,height:"40px"}}>
                <span >Little Volume </span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"330px"}}>
               <Link to='/Lash-Q5'>
               <button className='rec-button-image' style={{width:"120px" ,height:"40px"}}>
                <span >High Volume </span>
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

export default LashQ4;