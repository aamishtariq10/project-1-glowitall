import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const FoundationQ6C = () => {
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
              <h4 className='start-content py-4'>6. Select the tone that is closest to your skin!</h4>

            <div className='flex-images-q6 py-1'>
               <Link to='/found-Q7'><img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-calm-emotions-hands-face-white-background_186202-6994.jpg?size=626&ext=jpg&ga=GA1.1.1328896093.1680638695&semt=ais" alt='picture' style={{width:"250px", height:"250px"}}/></Link>

               <Link to='/found-Q7'><img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-calm-emotions-hands-face-white-background_186202-6994.jpg?size=626&ext=jpg&ga=GA1.1.1328896093.1680638695&semt=ais" alt='picture' style={{width:"250px", height:"250px"}}/></Link>
              
               <Link to='/found-Q7'><img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-calm-emotions-hands-face-white-background_186202-6994.jpg?size=626&ext=jpg&ga=GA1.1.1328896093.1680638695&semt=ais" alt='picture' style={{width:"250px", height:"250px"}}/></Link>
            
               </div>

            <div className='flex-images-6a py-1'>
            <Link to='/found-Q7'><img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-calm-emotions-hands-face-white-background_186202-6994.jpg?size=626&ext=jpg&ga=GA1.1.1328896093.1680638695&semt=ais" alt='picture' style={{width:"250px", height:"250px"}}/></Link>

            <Link to='/found-Q7'><img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-calm-emotions-hands-face-white-background_186202-6994.jpg?size=626&ext=jpg&ga=GA1.1.1328896093.1680638695&semt=ais" alt='picture' style={{width:"250px", height:"250px"}}/></Link>
            
               </div>
              </div>
          </div>
         </div>
      </Container>

    </>
  )
}

export default FoundationQ6C;