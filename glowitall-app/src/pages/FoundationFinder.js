import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const FoundationFinder = () => {
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
               <h4 className='Start-content py-2'>FOUNDATION FINDER</h4>
               <h6 className='Start-content py-2'>Find your perfect foundation and Shade easily! <br/>  </h6>
               <h6 className='Start-content py-2'> Take our quick shade finder quiz and find your perfect foundation shade and a  <br/> customized routine that will take you to complexion perfection.</h6>
               <div className='button-holder py-2'>
                <Link to='/found-Q1'>
               <button className='rec-button' >
                <span >GET STARTED</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://blogscdn.thehut.net/app/uploads/sites/2/2021/06/MicrosoftTeams-image-42_1625069130.jpg" alt='picture' style={{width:"100%"}}/>
              </div>
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default FoundationFinder;