import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const LashFinder = () => {
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
               <h4 className='Start-content py-2'>LASH FINDER</h4>
               <h6 className='Start-content py-2'>To Enhance your Beauty, <br/>complete the Quiz to discover your perfect Lashes</h6>
               <h6 className='Start-content py-2'> Reveal your personalized Lash <br/> products under 2 minutes!</h6>
               <div className='button-holder py-2'>
                <Link to='/Lash-Q1'>
               <button className='rec-button' >
                <span >GET STARTED</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/female-eye-with-brown-bright-make-up-leaf-face_186202-1322.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=sph" alt='picture' style={{width:"100%"}}/>
              </div>
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default  LashFinder ;