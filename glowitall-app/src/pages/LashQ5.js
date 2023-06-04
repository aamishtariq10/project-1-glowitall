import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom'; 


const LashQ5 = () => {
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
              <div className="col-7 text-content-q2" style={{paddingTop:"80px"}}>
               <h4 className='Start-content py-2' style={{marginLeft:"35px"}}>5. How often do you wear false lashes?</h4>
              <div className='display-button'>
              <div className='button-holder btn-space py-3' >
              <Link to='/Lash-Q6'>
               <button className='rec-button' >
                <span >Everday </span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3' >
               <Link to='/Lash-Q6'>
               <button className='rec-button' >
                <span>Special Events</span>
               </button>
               </Link>
               </div>
              </div>
              <div className='display-button'>
              <div className='button-holder btn-space py-3'>
              <Link to='/Lash-Q6'>
               <button className='rec-button' >
                <span>Parties</span>
               </button>
               </Link>
               </div>
               <div className='button-holder btn-space-1 py-3'>
               <Link to='/Lash-Q6'>
               <button className='rec-button' >
                <span>For Bride </span>
               </button>
               </Link>
               </div>
              </div>
            </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/free-photo/cosmetic-comb-eyelashes-macro-image_186202-3969.jpg?size=626&ext=jpg&uid=R97680113&ga=GA1.1.1059806880.1679947817&semt=ais" alt='picture' style={{width:"100%",height:"350px"}}/>
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default LashQ5;