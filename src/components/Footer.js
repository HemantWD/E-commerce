import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center" >
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className='text-white fs-6'>
                <address>Hno: 256 Mahaveer Nagar 1st ,<br />
                  Durgapura, Jaipur <br />
                  Pincode: 302018
                </address>
                <a href="tel: +0141-2722309" className='mt-2 d-block mb-3 text-white'>
                  +0141-2722309
                </a>
                <a href="mailto:hemantajaysharma98@gmail.com" className='mt-3 d-block mb-3 text-white'>
                  hemantajaysharma98@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <Link to="https://www.linkedin.com/" target="_blank">
                    <BsLinkedin className='text-white fs-4' />
                  </Link>
                  <Link to="https://github.com/" target="_blank">
                    <BsGithub className='text-white fs-4' />
                  </Link>
                  <Link to="https://www.youtube.com/" target="_blank">
                    <BsYoutube className='text-white fs-4' />
                  </Link>
                  <Link to="https://www.instagram.com/" target="_blank">
                    <BsInstagram className='text-white fs-4' />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                {/* flex-column to show the data in column */}
                <Link className='text-white py-2 mb-1' to="/">Privacy Policy</Link>
                <Link className='text-white py-2 mb-1' to="/">Refund Policy</Link>
                <Link className='text-white py-2 mb-1' to="/">Shipping Policy</Link>
                <Link className='text-white py-2 mb-1' to="/">Terms and Conditions</Link>
                <Link className='text-white py-2 mb-1' to="/">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                {/* flex-column to show the data in column */}
                <Link className='text-white py-2 mb-1' to="/">About Us</Link>
                <Link className='text-white py-2 mb-1' to="/">FAQ</Link>
                <Link className='text-white py-2 mb-1' to="/">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                {/* flex-column to show the data in column */}
                <Link className='text-white py-2 mb-1' to="/">Laptops</Link>
                <Link className='text-white py-2 mb-1' to="/">HeadPhones</Link>
                <Link className='text-white py-2 mb-1' to="/">Tablets</Link>
                <Link className='text-white py-2 mb-1' to="/">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="containe-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy;{new Date().getFullYear()}  Powered By Coders
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
