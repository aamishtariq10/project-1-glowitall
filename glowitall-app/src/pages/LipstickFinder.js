import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const LipstickFinder = () => {
  return (
    <>
      <Meta title={"Welcome"} />
      <BreadCrumb title="Welcome" />
      <Container class1="cart-wrapper home-wrapper-2 py-1">
        <div className="row">
          <div className="col-12">
            <div className='strip '>
              <h1 className="Start-title">BEAUTY STUDIO</h1>
            </div>
            </div>
            <div className='content py-4'>
              <div className="col-7 text-content" >
               <h4 className='Start-content py-2'>LIPSTICK FINDER</h4>
               <h6 className='Start-content py-2'>The time to discover your newest lip obssessions.<br/> Start the Quiz and discover the perfect lip color of your choice. </h6>
               <h6 className='Start-content py-2'> Explore our Lip Colour Finder to compare shades and textures on different skin tones.</h6>
               <div className='button-holder py-2'>
                <Link to='/Lip-Q1'>
               <button className='rec-button' >
                <span >GET STARTED</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/adorable-curly-woman-paints-her-lips-with-red-lipstick-laughs-pink-background_197531-17569.jpg?size=626&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"100%"}}/>
              </div>
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default LipstickFinder ;