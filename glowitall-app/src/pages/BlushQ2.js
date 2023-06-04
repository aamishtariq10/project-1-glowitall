import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const BlushQ2 = () => {
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
               <h4 className='start-content py-4'>2. What is your preferred finish?</h4>
               
               <div className='flex-images-10'>
               <img src="https://t3.ftcdn.net/jpg/01/45/55/24/240_F_145552440_LfX1RB9CNWiRBWQ9ZvrM0CGqUpyAg5js.jpg" alt='' style={{width:"250px", height:"150px"}}/>
                        
               <img src="https://img.freepik.com/premium-photo/eyeshadow-blush-swatch-isolated-white_89245-562.jpg?size=626&ext=jpg&ga=GA1.2.1585862874.1679850603&semt=ais" alt='' style={{width:"250px", height:"150px"}}/>
               </div>
            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"430px"}}>
              <Link to='/Blush-Q3'>
               <button className='rec-button-image' style={{width:"110px"}}>
                <span >Shimmer</span>
               </button>
               </Link>
               </div>        
               <div className='py-3' style={{marginLeft:"230px"}}>
               <Link to='/Blush-Q3'>
               <button className='rec-button-image' style={{width:"100px"}}>
                <span>Matte</span>
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

export default BlushQ2;