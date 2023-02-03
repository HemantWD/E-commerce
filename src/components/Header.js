import React from 'react'
import { NavLink, Link } from 'react-router-dom'
export const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over 500 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white'>
                Mob No: <a href="tel:+91 9024082738" className='text-white'>+91 9024082738</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link> Coders</Link>
              </h2>
            </div>
            <div className="col-5"></div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  )
}
