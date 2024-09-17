import React, { useState,useEffect } from "react";
import PageTitle from "../templates/PageTitle";
import { useParams } from "react-router-dom";
import {baseApiUrl} from '../../global'
import axios from "axios";
import '../../styles/ProductByCategory.css'
import ProductItem from "./ProductItem";

const ProductByCategory = ()=>{
    const {id} = useParams()
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState({})

    const getCategory = async()=>{
        try {
            const url = `${baseApiUrl}/categories/${id}`;
            const res = await axios.get(url); // Aguarda a resposta
            setCategory(res.data.categories || res.data);
        } catch (error) {
            console.error('Erro ao carregar categorias:', error);
        }
    }

    const getProducts = async()=>{
        const url = `${baseApiUrl}/categories/${id}/products`
        const res = await axios.get(url)
        setProducts(res.data.data || res.data)
    }

    useEffect(() => {
        if (id) {
          getCategory()
          getProducts()
        }
      }, [id]);


    return(
        <div className="products-by-category">
            <PageTitle icon="fa fa-folder-o" main={category.name}/>
            <ul>
            {products.map(product => (
                <li key={product.id}><ProductItem product={product}/></li>
            ))}
            </ul>
        </div>
    );
}

export default ProductByCategory