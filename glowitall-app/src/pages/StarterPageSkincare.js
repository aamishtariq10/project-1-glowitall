import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const StarterPageSkincare = () => {
  return (
    <>
      <Meta title={"Welcome"} />
      <BreadCrumb title="Welcome" />
      <Container class1="cart-wrapper home-wrapper-2 py-1">
        <div className="row">
          <div className="col-12">
            <div className='strip '>
              <h1 className="Start-title ">BEAUTY STUDIO</h1>
            </div>
            </div>
            <div className='content py-4'>
              <div className="col-7 text-content" >
               <h4 className='Start-content py-2 text-dark'>START YOUR QUIZ!</h4>
               <h6 className='Start-content py-2 text-dark'>Let's find just what your skin <br/> needs to look and feel its best. </h6>
               <h6 className='Start-content py-2 text-dark'> Reveal your personalized Skincare <br/> products under 2 minutes!</h6>
               <div className='button-holder py-2'>
               <Link to="/Skin-Q1">
               <button className='rec-button' >
                <span >GET STARTED</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="Images/Cover.jpg" alt='picture' style={{width:"100%"}}/>
              </div>
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default StarterPageSkincare