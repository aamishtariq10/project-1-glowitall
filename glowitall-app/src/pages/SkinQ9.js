import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom'; 


const SkinQ9 = () => {
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
               <h4 className='Start-content py-2'>9. How many glasses of water do you take everyday?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space-2 py-3' >
              <Link to="/Skin-Q10">
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Less than 3 glasses</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-3 py-3' >
               <Link to="/Skin-Q10">
               <button className='rec-button'style={{width:"150px",height:"50px"}} >
                <span >3-8 glasses</span>
               </button>
               </Link>
               </div>
              </div>
              
               <div className='button-holder py-3'>
               <Link to="/Skin-Q10">
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >8+ glasses</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-vector/full-empty-glass_98292-4720.jpg?size=626&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"100%",height:"350px"}}/>
                
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default SkinQ9;