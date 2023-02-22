import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
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
                Mob No: <a href="tel:+91 9024082738" className='text-white'>0141-2722309</a>
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
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product Here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-6' /> </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-as d-flex align-items-center justify-content-between">
                <div>
                  <Link to='/' className='d-flex align-item-cente gap-10 text-white'>
                    <img src="images/compare.svg" alt="compare" />
                    <p className='mb-0'>Compare <br />Products</p>
                  </Link>
                </div>
                <div>
                  <Link to='/' className='d-flex align-item-cente gap-10 text-white'>
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Favourite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to='/' className='d-flex align-item-cente gap-10 text-white' >
                    <img src="images/user.svg" alt="Login" />
                    <p className='mb-0'>Login <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to='/' className='d-flex align-item-cente gap-10 text-white'>
                    <img src="images/cart.svg" alt="Cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className='mb-0'>$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="images/menu.svg" alt="icon" />
                      <span className='me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">Home</NavLink>
                    <NavLink className="text-white" to="/">Our Store</NavLink>
                    <NavLink className="text-white" to="/">Blogs</NavLink>
                    <NavLink className="text-white" to="/contact">Contact Us</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
