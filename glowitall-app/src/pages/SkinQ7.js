/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom'; 

const SkinQ7 = () => {
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
               <h4 className='start-content py-4'>7. How often do you get pimples?</h4>
               
               <div className='flex-images-7'>
               <img src="https://img.freepik.com/free-icon/timetable_318-812577.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="https://img.freepik.com/free-icon/calendar_318-263873.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="https://img.freepik.com/free-icon/calendar_318-449334.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               <img src="https://img.freepik.com/free-icon/open_318-204973.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais" alt='picture' style={{width:"250px", height:"200px"}}/>

               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"90px"}}>
              <Link to="/Skin-Q8">
               <button className='rec-button-image'>
                <span >Rarely</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"235px"}}>
               <Link to="/Skin-Q8">
               <button className='rec-button-image'>
                <span >Weekly</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"225px"}}>
               <Link to="/Skin-Q8">
               <button className='rec-button-image'>
                <span >Monthly</span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"240px"}}>
               <Link to="/Skin-Q8">
               <button className='rec-button-image'>
                <span >Daily</span>
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

export default SkinQ7;