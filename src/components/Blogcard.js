import React from 'react'
import { Link } from "react-router-dom";

 const Blogcard = () => {
  return (
     <div className='col-3'>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" alt="blog" className='img-fluid' />
            </div>
            <div className="blog-content">
                <p className="date">14 Feb, 2023</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime commodi ea tenetur dolor nihil fuga ad! Cum repellat saepe officiis?</p>
                <Link className="button" to="/">Read more</Link>
            </div>
        </div>
     </div>
  )
} 

export default Blogcard