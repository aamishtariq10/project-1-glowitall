import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const FoundationQ1 = () => {
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
               <h4 className='Start-content py-2' style={{marginLeft:"70px"}}>1. What is your age?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space py-3' >
                <Link to='/found-Q2'>
               <button className='rec-button' >
                <span >24 or Under</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3' >
               <Link to='/found-Q2'>
               <button className='rec-button' >
                <span >25-34</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='display-button'>
              <div className='button-holder btn-space py-3'>
              <Link to='/found-Q2'>
               <button className='rec-button' >
                <span >34-44</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3'>
               <Link to='/found-Q2'>
               <button className='rec-button' >
                <span >45-54</span>
               </button>
               </Link>
               </div>
              </div>
               <div className='button-holder py-3' style={{marginLeft:"70px"}}>
               <Link to='/found-Q2'>
               <button className='rec-button' >
                <span >55 or above</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="Images/age.jpeg" alt='picture' style={{width:"100%",height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default FoundationQ1;