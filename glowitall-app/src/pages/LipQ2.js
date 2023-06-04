import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const LipQ2 = () => {
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
               <h4 className='Start-content py-2' style={{marginLeft:"40px"}}>2. What formula do you have in mind?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space-2 py-3' >
              <Link to='/Lip-Q3'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Liquid</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-3 py-3' >
               <Link to='/Lip-Q3'>
               <button className='rec-button'style={{width:"150px",height:"50px"}} >
                <span >Bullet</span>
               </button>
               </Link>
               </div>
              </div>
              
               <div className='button-holder py-3'>
               <Link to='/Lip-Q3'>
               <button className='rec-button' style={{width:"150px",height:"50px" , marginLeft:'40px'}} >
                <span >Everything</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-4'>
                <img src="https://img.freepik.com/free-photo/close-up-red-lipsticks-arrangement_23-2148978116.jpg?size=626&ext=jpg&uid=R97680113&ga=GA1.2.1059806880.1679947817&semt=ais" alt='picture' style={{height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default LipQ2;