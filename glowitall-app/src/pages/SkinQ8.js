import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom'; 


const SkinQ8 = () => {
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
               <h4 className='Start-content py-2'>8. How much makeup do you use on a daily basis?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space-2 py-3' >
              <Link to="/Skin-Q9">
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >None</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-3 py-3' >
               <Link to="/Skin-Q9">
               <button className='rec-button' style={{width:"150px",height:"50px"}}>
                <span >A little</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='display-button'>
              <div className='button-holder btn-space-2 py-3'>
              <Link to="/Skin-Q9">
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >A decent amount</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-3 py-3'>
               <Link to="/Skin-Q9">
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >Full Coverage</span>
               </button>
               </Link>
               </div>
              </div>
              
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/scared-young-beautiful-girl-sits-table-with-makeup-tools-holding-alarm-clock-isolated-pink-background_141793-118713.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"100%",height:"350px"}}/>
                
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default SkinQ8;