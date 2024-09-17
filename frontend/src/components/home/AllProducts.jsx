import React, { useState,useEffect } from "react";
import {baseApiUrl} from '../../global'
import axios from "axios";
import '../../styles/ProductByCategory.css'
import ProductItem from "../product/ProductItem";

const AllProducts = ()=>{
    const [products, setProducts] = useState([])

    const getProducts = async()=>{
        const url = `${baseApiUrl}/allproducts`
        const res = await axios.get(url)
        setProducts(res.data.data || res.data)
    }

    useEffect(() => {
          getProducts()
      },[]);


    return(
        <div className="products-by-category">
            <ul>
            {products.map(product => (
                <li key={product.id}><ProductItem product={product}/></li>
            ))}
            </ul>
        </div>
    );
}

export default AllProducts