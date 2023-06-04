import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';


const SkinQ10 = () => {
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
               <h4 className='Start-content py-2'>10. How much time do you spend under direct sun <br/> exposure per day?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space py-3' >
              <Link to='/Skin-Q11'>
               <button className='rec-button' >
                <span >1 hour or less</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3' >
               <Link to='/Skin-Q11'>
               <button className='rec-button' >
                <span >2-3 hours</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='display-button'>
              <div className='button-holder btn-space py-3'>
              <Link to='/Skin-Q11'>
               <button className='rec-button' >
                <span >4-6 hours</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3'>
               <Link to='/Skin-Q11'>
               <button className='rec-button' >
                <span >7 or more</span>
               </button>
               </Link>
               </div>
              </div>
               <div className='button-holder py-3'>
               <Link to='/Skin-Q11'>
               <button className='rec-button' >
                <span >None</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/woman-shading-her-face-from-sun-while-outdoors_23-2148648033.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais" alt='picture' style={{width:"100%",height:"350px"}}/>
               
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default SkinQ10;