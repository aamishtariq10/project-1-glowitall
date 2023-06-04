/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const SkinQ3 = () => {
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
               <h4 className='start-content py-2'>3. What is your top skin concern?</h4>
               
               <div className='flex-images'>
               <img src="Images/acne.png" alt='picture' style={{width:"200px", height:"150px"}}/>

               <img src="https://img.freepik.com/free-photo/selfcare-cosmetology-beauty-concept-sensual-attractive-relaxed-naked-redhead-young-woman-freckled-cheeks-closed-eyes-gently-touching-cheek-enjoying-clean-pure-skin-condition-applying-daily-creme_176420-34646.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"200px", height:"150px"}}/>
              
               <img src="https://static.toiimg.com/thumb/msid-67074139,imgsize-127575,width-800,height-600,resizemode-75/67074139.jpg" alt='picture' style={{width:"200px", height:"150px"}}/>
              
               <img src="Images/darkspots.png" alt='picture' style={{width:"200px", height:"150px"}}/>

               <img src="Images/wrnikles.png" alt='picture' style={{width:"200px", height:"150px"}}/>
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"120px"}}>
              <Link to="/Skin-Q4">
               <button className='rec-button-image' >
                <span >Acne</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"140px"}}>
               <Link to="/Skin-Q4">
               <button className='rec-button-image' >
                <span >Pores</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"115px"}}>
               <Link to="/Skin-Q4">
               <button className='rec-button-image-3' >
                <span >Signs of Aging</span>
               </button>
               </Link>
               </div>
               <div className='py-3'  style={{marginLeft:"112px"}}>
               <Link to="/Skin-Q4">
               <button className='rec-button-image-4' >
                <span >Dark Spots</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"100px"}}>
               <Link to="/Skin-Q4">
               <button className='rec-button-image-5' >
                <span >Fineliness & Wrinkles</span>
               </button>
               </Link>
               </div>
            </div>

            <div className='flex-images'>
               <img src="Images/dullness.png" alt='picture' style={{width:"200px", height:"150px"}}/>

               <img src="Images/redness.png" alt='picture' style={{width:"200px", height:"150px"}}/>
              
               <img src="Images/drylips.png" alt='picture' style={{width:"200px", height:"150px"}}/>
              
               <img src="Images/dark circles.jpeg" alt='picture' style={{width:"200px", height:"150px"}}/>

               <img src="Images/hyperpigmentation.jpg" alt='picture' style={{width:"200px", height:"150px"}}/>
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"120px"}}>
              <Link to="/Skin-Q4">
               <button className='rec-button-image' >
                <span >Dullness</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"140px"}}>
               <Link to="/Skin-Q4">
               <button className='rec-button-image' >
                <span >Redness</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"135px"}}>
               <Link to="/Skin-Q4">
               <button className='rec-button-image-8' >
                <span >Dry Lips</span>
               </button>
               </Link>
               </div>
               <div className='py-3'  style={{marginLeft:"143px"}}>
               <Link to="/Skin-Q4">
               <button className='rec-button-image-4' >
                <span >Dark Circles</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"102px"}}>
               <Link to="/Skin-Q4">
               <button className='rec-button-image-5' >
                <span >Hyperpigmentation</span>
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

export default SkinQ3;