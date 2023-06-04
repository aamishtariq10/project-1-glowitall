import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const BlushFinder = () => {
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
               <h4 className='Start-content py-2'>BLUSH FINDER</h4>
               <h6 className='Start-content py-2'>Turn a new cheeks : Find your blush formula now <br/> Complete the Quiz and discover the desired range of blushes. </h6>
               <h6 className='Start-content py-2'> Let's find out which blush color is right for your skintone! <br/> Click to choose your perfect shade match.</h6>
               <div className='button-holder py-2'>
                <Link to='/Blush-Q1'>
               <button className='rec-button' >
                <span >GET STARTED</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/front-view-blonde-woman-uses-her-powder-brush-her-face-make-up_140725-37482.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"100%"}}/>
              </div>
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default  BlushFinder;