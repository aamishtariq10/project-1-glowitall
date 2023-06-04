import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const LashQ1 = () => {
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
               <h4 className='start-content py-4'>1. When you open your eyes, do you have crease?</h4>
               
               <div className='flex-images-10'>
               <img src="https://img.freepik.com/free-photo/face-young-woman-gray-background_155003-16486.jpg?size=626&ext=jpg&uid=R97680113&ga=GA1.2.1059806880.1679947817&semt=ais" alt='picture' style={{width:"250px", height:"150px"}}/>

                        
               <img src="https://img.freepik.com/free-photo/well-kept-portrait-beautiful-young-woman-white-studio-background-concept-cosmetics-makeup-natural-eco-treatment-skin-care-shiny-healthy-look-fashion-healthcare-copyspace_155003-23272.jpg?w=740&t=st=1679955131~exp=1679955731~hmac=250df9b96748d46b36d9ceadb89785361d11f58f5e855b3e61555e4ad398dd8d" alt='picture' style={{width:"250px", height:"150px"}}/>
            
              

               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"440px"}}>
              <Link to='/Lash-Q2'>
               <button className='rec-button-image'>
                <span >No</span>
               </button>
               </Link>
               </div>
               
               <div className='py-3' style={{marginLeft:"240px"}}>
               <Link to='/Lash-Q2'>
               <button className='rec-button-image'>
                <span>Yes</span>
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

export default LashQ1;