import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from "react-router-dom";
const ProductCard = () => {
    return (
        <div className="col-3">
            <div className="product-card position-relative">
                <div className="whislist-icon position-absolute">
                    <Link to="">
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-images">
                    <img src="images/watch.jpg" alt="Featured Collection" />
                </div>
                <div className="product-details">
                    <h6 className="brand">LensCart</h6>
                    <h5 className='product-title'>
                        Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <p className="price">$100.00</p>
                    <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700"
                    />
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                        <Link to="">
                            <img src="images/view.svg" alt="" />
                        </Link>
                        <Link to="">
                            <img src="images/prodcompare.svg" alt="addCart" />
                        </Link>
                        <Link to="">
                            <img src="images/add-cart.svg" alt="addCart" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard