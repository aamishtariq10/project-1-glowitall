import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const FoundationQ2 = () => {
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
              <div className="col-7 text-content-q2" style={{paddingTop:"80px"}}>
               <h4 className='Start-content py-2' style={{marginLeft:"45px"}}>2. Do you get sunburn easily?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space py-3' >
                <Link to='/found-Q3'>
               <button className='rec-button' >
                <span >All the time</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3' >
               <Link to='/found-Q3'>
               <button className='rec-button' >
                <span>Sometimes</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='display-button'>
              <div className='button-holder btn-space py-3'>
              <Link to='/found-Q3'>
               <button className='rec-button' >
                <span>Never</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3'>
               <Link to='/found-Q3'>
               <button className='rec-button' >
                <span>Not sure of it</span>
               </button>
               </Link>
               </div>
              </div>
            </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/suntan-lotion-woman-s-arm-sun-shape_329181-4424.jpg?size=626&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"100%",height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default FoundationQ2;