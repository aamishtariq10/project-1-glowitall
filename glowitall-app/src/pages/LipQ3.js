import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const LipQ3 = () => {
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
               <h4 className='start-content py-4'>3. What is your preferred finish?</h4>
               
               <div className='flex-images-lipq3'>
               <img src="Images/L1.png" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="https://img.freepik.com/free-photo/closeup-woman-hand-with-pink-nails-near-lips-fingernails-with-pink-manicure_186202-7376.jpg?size=626&ext=jpg&uid=R97680113&ga=GA1.1.1059806880.1679947817&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-woman_155003-42849.jpg?size=626&ext=jpg&uid=R97680113&ga=GA1.1.1059806880.1679947817&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               <img src="https://img.freepik.com/free-photo/still-life-cosmetics-with-lipstick_23-2149234386.jpg?size=626&ext=jpg&uid=R97680113&ga=GA1.2.1059806880.1679947817&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>

               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"90px"}}>
              <Link to='/Lip-Q4'>
               <button className='rec-button-image' >
                <span >Matte</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"230px"}}>
               <Link to='/Lip-Q4'>
               <button className='rec-button-image'>
                <span >Gloss</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"220px"}}>
               <Link to='/Lip-Q4'>
               <button className='rec-button-image'>
                <span>Sheer</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"220px"}}>
               <Link to='/Lip-Q4'>
               <button className='rec-button-image' style={{width:"110px"}}>
                <span >Everthing</span>
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

export default LipQ3;