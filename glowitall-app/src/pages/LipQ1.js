import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const LipQ1 = () => {
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
               <h4 className='Start-content py-2' style={{marginLeft:"50px"}}>1. What kind of Coverage do you crave?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space-2 py-3' >
                <Link to='/Lip-Q2'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Light coverage</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-3 py-3' >
               <Link to='/Lip-Q2'>
               <button className='rec-button'style={{width:"150px",height:"50px"}} >
                <span >Medium coverage</span>
               </button>
               </Link>
               </div>
              </div>
              
               <div className='button-holder py-3'>
               <Link to='/Lip-Q2'>
               <button className='rec-button' style={{width:"150px",height:"50px", marginLeft:"40px"}} >
                <span >Full coverage</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-4'>
                <img src="https://img.freepik.com/free-photo/close-up-portrait-young-beatufiul-woman-looking-mirror-fixing-her-makeup-put-lipstick-standing-beige-background_1258-87293.jpg?size=626&ext=jpg&uid=R97680113&ga=GA1.1.1059806880.1679947817&semt=ais" alt='picture' style={{height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default LipQ1;