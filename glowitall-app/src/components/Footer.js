import React from 'react'
import {Link} from 'react-router-dom';
import {BsWhatsapp, BsFacebook, BsInstagram} from 'react-icons/bs';
import {MdUnsubscribe} from 'react-icons/md';


const Footer = () => {
  return (
    <>
    <footer className="py-2">
      <div className="container-xxl"> 
      <div className="row align-items-center">
        <div className="col-5">
          <div className="footer-top-data d-flex gap-30 align-items-center"> 
          <MdUnsubscribe className='fs-1 mt-2' style={{fill:"white"}} /> 
          <h2 className="mb-0 text-white">Sign Up for Emails</h2>
          </div>
        </div>
          <div className="col-7"> 
          <div className="input-group">
            <input type="text" 
            className="form-control py-1" 
            placeholder="Your Email Address"
            aria-label="Your Email Address"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text p-2" id="basic-addon2">
            Subscribe
          </span>
          </div>
        </div>
      </div> 
    </div>
</footer>

      <footer className="py-4">
         <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4" >Contact Us</h4>
              <div>
                   <div className='d-flex align-items-center gap-15 '>
                    <a className='text-white' href=''>
                      <BsFacebook className='fs-4' />
                    </a>
                    <a className='text-white' href=''>
                      <BsWhatsapp className='fs-4' />
                    </a>
                    <a className='text-white' href=''>
                      <BsInstagram className='fs-4' />
                    </a>
                   </div>
              </div>
            </div>

      <div className="col-3">
        <h4 className="text-white mb-4">Collection</h4> 
        <div className="footer-link d-flex flex-column">
          <Link to="/Start-skincare" className="text-white py-1 mb-1 " style={{textDecoration:"none"}}>Beauty studio </Link>
          <Link to="/Shop-All" className="text-white py-1 mb-1 " style={{textDecoration:"none"}}>Shop All </Link> 
          <Link to="/face-skincare" className="text-white py-1 mb-1" style={{textDecoration:"none"}}>Face </Link>
          <Link to="/eyes-skincare" className="text-white py-1 mb-1" style={{textDecoration:"none"}}>Eyes </Link>
          
          
        </div> 
      </div>


       <div className="col-3">
       <div className="footer-link d-flex flex-column" style={{marginTop: "53px"}}>
          <Link to="/lips-skincare" className="text-white py-1 mb-1" style={{textDecoration:"none"}}> Lips</Link>
          <Link to="/body" className="text-white py-1 mb-1 " style={{textDecoration:"none"}}> Body</Link>
          <Link to="/blog" className="text-white py-1 mb-1" style={{textDecoration:"none"}}> Blogs</Link>
          <Link to="/Bundles" className="text-white py-1 mb-1" style={{textDecoration:"none"}}> Bundles</Link>
            </div> 
      </div>

     

      <div className="col-3">
        <h4 className="text-white mb-4">About Us</h4> 
        <div className="footer-link d-flex flex-column">
          <p className='text-white'>Beauty for Each Individual To be the first choice of women seeking conscious free products.</p>
          <Link to='/About-Us' className="text-white py-2 mb-1" style={{textDecoration:"none"}}>View More...</Link>
        </div> 
      </div>

      </div>
    </div>
  </footer>


      <footer className="py-2">
        <div className="container-xxl"> 
          <div className="row">
            <div className="col-12">
               <p className="text-center mb-0 text-white">
                 &copy; {new Date().getFullYear()} Powered by GlowItAll
                </p> 
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer