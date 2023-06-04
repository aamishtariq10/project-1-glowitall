/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';


const SkinQ6 = () => {
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
            <div className='content py-2'>
              <div className="col-12 text-content-image" >
               <h4 className='start-content py-4'>6. How often is your skin sensitive?</h4>
               
               <div className='flex-images-4b'>
               <img src="https://img.freepik.com/free-icon/pulse_318-583977.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="https://img.freepik.com/free-icon/heart-beat_318-242813.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="https://img.freepik.com/free-icon/rate_318-167109.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"160px"}}>
              <Link to="/Skin-Q7">
               <button className='rec-button-image'>
                <span >Rarely</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"360px"}}>
               <Link to="/Skin-Q7">
               <button className='rec-button-image' style={{width:"95px"}} >
                <span >Sometimes</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"360px"}}>
               <Link to="/Skin-Q7">
               <button className='rec-button-image' style={{width:"110px"}} >
                <span >All the time</span>
               </button>
               </Link>
               </div>
            </div>
          </div>
         </div>

             
        </div>
      </Container>

    </>
  )
}

export default SkinQ6;