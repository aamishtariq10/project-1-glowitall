/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const SkinQ11 = () => {
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
               <h4 className='start-content py-2'>11. What are you looking for?</h4>
               
               <div className='flex-images-4b'>
               <img src="https://img.freepik.com/free-photo/flat-lay-body-cream-plain-background_23-2148241867.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=sph" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="Images/cleanser.jpg" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="https://img.freepik.com/free-photo/skin-oil-droppers-assortment-with-wooden-pieces_23-2148761386.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=sph" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"130px"}}>
              <Link to="/Skin-Q12">
               <button className='rec-button-image' style={{width:"110px"}} >
                <span >Moisturizer</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"360px"}}>
               <Link to="/Skin-Q12">
               <button className='rec-button-image' style={{width:"80px"}} >
                <span >Cleanser</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"360px"}}>
               <Link to="/Skin-Q12">
               <button className='rec-button-image' >
                <span >Serum</span>
               </button>
               </Link>
               </div>
            </div>

            <div className='flex-images-4b'>
               <img src="https://img.freepik.com/free-photo/skin-care-banner-concept-with-lotion_23-2149449121.jpg?size=626&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="https://img.freepik.com/free-photo/white-sunscreen-cream-coming-out-orange-bottle-against-orange-backdrop_23-2148154032.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="https://img.freepik.com/free-photo/still-life-cosmetic-products_23-2149163123.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"130px"}}>
              <Link to="/Skin-Q12">
               <button className='rec-button-image' style={{width:"110px"}} >
                <span >Eye Cream</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"340px"}}>
               <Link to="/Skin-Q12">
               <button className='rec-button-image' style={{width:"110px"}} >
                <span >Sun Screen</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"345px"}}>
               <Link to="/Skin-Q12">
               <button className='rec-button-image-8' >
                <span >Lip Mask</span>
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

export default SkinQ11;