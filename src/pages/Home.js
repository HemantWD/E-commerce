import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img src="images/main-banner-1.jpg" alt="main banner" className='img-fluid rounded-3' />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link to="/" className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg" alt="main banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-02.jpg" alt="main banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg" alt="main banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>Apple Ipad</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg" alt="main banner" className='img-fluid rounded-3' />
                  <div className="small-banner-content position-absolute">
                    <h4>Airpods Max</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex algin-items-center justify-content-between">
                <div>
                  <img src="images" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
