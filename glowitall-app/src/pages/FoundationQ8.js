import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const FoundationQ8 = () => {
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
               <h4 className='Start-content py-2' style={{marginLeft:"40px"}}>8. What type of coverage you prefer?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space-2 py-3' >
              <Link to='/found-Q9'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Light coverage</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-3 py-3' >
               <Link to='/found-Q9'>
               <button className='rec-button'style={{width:"150px",height:"50px"}} >
                <span >Medium coverage</span>
               </button>
               </Link>
               </div>
              </div>
              
               <div className='button-holder py-3' style={{marginLeft:"50px"}}>
               <Link to='/found-Q9'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Full coverage</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-4'>
                <img src="https://t3.ftcdn.net/jpg/00/89/40/72/240_F_89407201_nDADJtlZaBN4CNnPFEHgIo2JrGLcB7kp.jpg" alt='picture' style={{height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default FoundationQ8;