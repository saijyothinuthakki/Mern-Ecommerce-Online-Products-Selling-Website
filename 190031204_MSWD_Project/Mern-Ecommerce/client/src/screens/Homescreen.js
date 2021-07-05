import React from 'react';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Error from '../components/Error';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';

export default function Homescreen() {

  const getallproductsstate = useSelector(state => state.getAllProductsReducer)

  const { loading, products, error } = getallproductsstate
  const dispatch = useDispatch()

  useEffect(() => {



    dispatch(getAllProducts())

  }, [])
  return (
    <div>
      <div className="row justify-content-center">

        {loading ? (<Loader />) : error ? (<Error error='Something went wrong...' />) : (products.map(product=>{
          return <div className='col-md-3 m-2 p-2 card'>
            <Product product={product}/>
          </div>
        }))}

      </div>
    </div>
  )
}