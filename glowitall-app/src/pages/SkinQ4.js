/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom'; 

const SkinQ4 = () => {
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
               <h4 className='start-content py-4'>4. How would you describe your skin type?</h4>
               
               <div className='flex-images-7'>
               <img src="https://img.freepik.com/free-icon/moon_318-744273.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="https://img.freepik.com/free-icon/drops_318-222742.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="https://img.freepik.com/free-icon/fog_318-468040.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               <img src="https://img.freepik.com/free-icon/makeup_318-741375.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>

               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"90px"}}>
              <Link to="/Skin-Q5">
               <button className='rec-button-image'>
                <span >Normal</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"230px"}}>
               <Link to="/Skin-Q5">
               <button className='rec-button-image'>
                <span >Oily</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"230px"}}>
               <Link to="/Skin-Q5">
               <button className='rec-button-image'>
                <span >Dry</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"235px"}}>
               <Link to="/Skin-Q5">
               <button className='rec-button-image'>
                <span >Combination</span>
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

export default SkinQ4;