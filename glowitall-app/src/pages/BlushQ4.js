import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';


const BlushQ4 = () => {
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
               <h4 className='Start-content py-2'>4. What is your preferred method of blush Application?</h4>
               <div className='button-holder py-3' >
               <Link to='/Blush-Q5'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Brush Up</span>
               </button>
               </Link>
               </div>
               <div className='button-holder py-3' >
               <Link to='/Blush-Q5'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Hands On</span>
               </button>
               </Link>
               </div>
              
              </div>
              <div className='col-5'>
                <img src="https://t3.ftcdn.net/jpg/01/57/64/74/240_F_157647418_T0Knkg4DBmwA9gpbiepuhGSaUZAxd3Px.jpg" alt='picture' style={{width:"100%",height:"350px"}}/>
              </div>
             
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default BlushQ4;