import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const MascaraQ2 = () => {
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
               <h4 className='start-content py-4'>2. Which brush type do you prefer?</h4>
               
               <div className='flex-images-4b'>
               <img src="https://img.freepik.com/premium-photo/black-mascara-brush-stroke-closeup-isolated-white-background_360074-20444.jpg?w=826" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="https://img.freepik.com/free-photo/black-mascara-eyes_144627-21339.jpg?w=740&t=st=1679856768~exp=1679857368~hmac=a35a07980e1a27843f3e013988c3cb49a6153c9051ce0bdca4f2df9c35795746" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="https://img.freepik.com/free-photo/top-view-rimmel-white-background_23-2148210694.jpg?w=740&t=st=1679857559~exp=1679858159~hmac=223ef90c9267f0b7932543d21cc51921a862bfb232c4b612a74dbfa2a6f0c06e" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"70px"}}>
              <Link to='/Mas-Q3'>
               <button className='rec-button-image' style={{width:"250px" ,height:"40px"}}>
                <span >Curved Brush for easy application </span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"190px"}}>
               <Link to='/Mas-Q3'>
               <button className='rec-button-image' style={{width:"250px" ,height:"40px"}} >
                <span >Lash Building Brush for definition</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"190px"}}>
               <Link to='/Mas-Q3'>
               <button className='rec-button-image' style={{width:"250px" ,height:"40px"}} >
                <span >Flexible Brush for suppleness</span>
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

export default MascaraQ2;