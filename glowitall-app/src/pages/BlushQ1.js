import React from 'react';
import Meta from "../components/Meta";
import Container from "../components/Container";
import {FcNext} from 'react-icons/fc';  
import { Link } from 'react-router-dom';

const BlushQ1 = () => {
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
               <h4 className='start-content py-4'>1. How do you like it?</h4>
               
               <div className='flex-images-4b'>
               <img src="https://t4.ftcdn.net/jpg/05/26/99/11/240_F_526991141_3Wo2joUF968gPkWoHfdD1R6mPRu6xhsh.jpg" alt='picture' style={{width:"250px", height:"200px"}}/>

               <img src="https://t3.ftcdn.net/jpg/05/37/86/18/240_F_537861888_rDBTV43bFsvduiLsxBLImCVBy919KbLF.jpg" alt='picture' style={{width:"250px", height:"200px"}}/>
              
               <img src="https://t4.ftcdn.net/jpg/02/51/17/09/240_F_251170994_qCMvZgr4sspm4dp4xjplvXnf47JyQbS7.jpg" alt='picture' style={{width:"250px", height:"200px"}}/>
            
               </div>

            <div className='flex-buttons'>
              <div className='py-3' style={{marginLeft:"130px"}}>
              <Link to='/Blush-Q2'>
               <button className='rec-button-image' style={{width:"100px" ,height:"40px"}}>
                <span >Powder </span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"350px"}}>
               <Link to='/Blush-Q2'>
               <button className='rec-button-image' style={{width:"100px" ,height:"40px"}} >
                <span >Liquid </span>
               </button>
               </Link>
               </div>
               <div className='py-3' style={{marginLeft:"350px"}}>
               <Link to='/Blush-Q2'>
               <button className='rec-button-image' style={{width:"100px" ,height:"40px"}} >
                <span >Cream </span>
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

export default BlushQ1;