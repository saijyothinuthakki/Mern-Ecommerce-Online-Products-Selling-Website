import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

export default function Product({ product }) {
    return (


        <div className="text-start">
            <div>
                <Link to={`product/${product._id}`}>
                    <div className='text-center'>
                    <img src={product.image} className="img-fluid"></img>
                    </div>
                    <h1>{product.name}</h1>

                    <Rating
                        style={{ color: 'orange' }}
                        initialRating={product.rating}
                        emptySymbol="far fa-star fa-1x"
                        fullSymbol="fas fa-star fa-1x"
                        readonly={true}
                    />
                    <h1>Price:{product.price}</h1>

                </Link>
            </div>
        </div>





    )




}