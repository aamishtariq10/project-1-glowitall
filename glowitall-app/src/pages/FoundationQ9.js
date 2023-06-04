import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const FoundationQ9 = () => {
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
               <h4 className='start-content py-4'>9. Do you prefer matte or luminous?</h4>
               
               <div className='flex-images-10'>
               <img src="Images/Matte.png" alt='picture' style={{width:"250px", height:"150px"}}/>

                        
               <img src="Images/Lumi.png" alt='picture' style={{width:"250px", height:"150px"}}/>
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"430px"}}>
              <Link to='/found-Q10'>
               <button className='rec-button-image' style={{width:"120px"}}>
                <span >Matte</span>
               </button>
               </Link>
               </div>
               
               <div className='py-3' style={{marginLeft:"210px"}}>
               <Link to='/found-Q10'>
               <button className='rec-button-image' style={{width:"120px"}}>
                <span>Luminuous</span>
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

export default FoundationQ9;