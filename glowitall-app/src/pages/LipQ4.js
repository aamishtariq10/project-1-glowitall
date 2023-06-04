import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const LipQ4 = () => {
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
               <h4 className='start-content py-4'>4. Choose your color family!</h4>
               
               <div className='flex-images'>
               <img src="Images/F1.png" alt='picture' style={{width:"200px", height:"170px"}}/>

               <img src="Images/F2.png" alt='picture' style={{width:"200px", height:"170px"}}/>
              
               <img src="Images/F3.png" alt='picture' style={{width:"200px", height:"170px"}}/>
            
               <img src="Images/F4.png" alt='picture' style={{width:"200px", height:"170px"}}/>

               <img src="Images/F5.png" alt='picture' style={{width:"200px", height:"170px"}}/>
               </div>

            <div className='flex-buttons'>
              <div className='py-4' style={{marginLeft:"90px"}}>
              <Link to='/Lip-Q5'>
               <button className='rec-button-image' style={{width:"110px"}}>
                <span >Power Nude</span>
               </button>
               </Link>
               </div>
               <div className='py-4' style={{marginLeft:"140px"}}>
               <Link to='/Lip-Q5'>
               <button className='rec-button-image' style={{width:"110px"}}>
                <span >Pop of Pink</span>
               </button>
               </Link>
               </div>
               <div className='py-4' style={{marginLeft:"130px"}}>
               <Link to='/Lip-Q5'>
               <button className='rec-button-image' style={{width:"110px"}}>
                <span>Rich Red</span>
               </button>
               </Link>
               </div>
               <div className='py-4' style={{marginLeft:"130px"}}>
               <Link to='/Lip-Q5'>
               <button className='rec-button-image' style={{width:"110px"}}>
                <span >Cool Coral
</span>
               </button>
               </Link>
               </div>
               <div className='py-4' style={{marginLeft:"130px"}}>
               <Link to='/Lip-Q5'>
               <button className='rec-button-image' style={{width:"110px"}}>
                <span>Bold Berry</span>
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

export default LipQ4;