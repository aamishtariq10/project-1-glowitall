import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const MascaraFinder = () => {
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
               <h4 className='Start-content py-2'>MASCARA FINDER</h4>
               <h6 className='Start-content py-2'>Find the Best Mascara for you! Complete the Quiz <br/> to discover your perfect mascara match. </h6>
               <h6 className='Start-content py-2'> From a daily definition to a full flutter, kit out your makeup bag <br/>  with a mascara that’s up to the task</h6>
               <div className='button-holder py-2'>
                <Link to='/Mas-Q1'>
               <button className='rec-button' >
                <span >GET STARTED</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/cute-beautiful-girl-dye-eyelashes-smiling-looking-camera-white-background-beauty-health-cosmetology-concept_176420-14015.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"100%"}}/>
              </div>
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default  MascaraFinder;