import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
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
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className='text-white'>
                Coders
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input type="text" className="form-control py-2" placeholder="Search Product Here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-6'/> </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  )
}
