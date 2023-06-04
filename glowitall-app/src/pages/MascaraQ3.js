import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from 'react-router-dom';

const MascaraQ3 = () => {
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
               <h4 className='Start-content py-2'>3. What's your go to formula?</h4>
               <div className='button-holder py-3' >
               <Link to='/Mas-Q4'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >WASHABLE</span>
               </button>
               </Link>
               </div>
               <div className='button-holder py-3' >
               <Link to='/Mas-Q4'>
               <button className='rec-button' style={{width:"150px",height:"50px"}} >
                <span >WATERPROOF</span>
               </button>
               </Link>
               </div>
              
              </div>
              <div className='col-5'>
                <img src="https://img.freepik.com/premium-photo/young-woman-after-shower-wearing-white-dressing-gown-has-white-towel-wrapping-her-hair-girl-sitting-sofa-doing-make-up-front-mirror-light-interior-room-woman-applying-mascara_1157-51628.jpg?w=740" alt='picture' style={{width:"100%",height:"350px"}}/>
                
              </div>
              
            </div>
          
        </div>
      </Container>

    </>
  )
}

export default MascaraQ3;