import React, { useEffect } from "react";
import PageTitle from "../templates/PageTitle";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseApiUrl } from "../../global";
import '../../styles/HistoryProducts.css'
import HistoryItem from "./HistoryItem";


const HistoryProducts = ()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dateBuyed = queryParams.get("dateBuyed");
    const user = useSelector((state)=>state.user)
    const [products, setProducts] = useState([])
    const [price, setPrice] = useState([])

    const getProducts= ()=>{
        const url = `${baseApiUrl}/history`
        axios.get(url,{ params:{ dateBuyed: dateBuyed,
                                 userId: user.id
        }}).then(res=>{
            setProducts(res.data)
        })
    }

    const getTotalPrice = ()=>{
        const url = `${baseApiUrl}/historyProducts`
        axios.get(url,{params:{ dateBuyed: dateBuyed,
                                 userId: user.id
        }}).then(res=>{
            setPrice(res.data)
        })
    }

    useEffect(()=>{
        getProducts()
        getTotalPrice()
    },[])


    return(
        <div className="history-products">
            <PageTitle icon="fa fa-history" main={dateBuyed}/>
            <ul>
            {products.map(product => (
                <li key={product.id}><HistoryItem product={product}/></li>
            ))}
            </ul>
            <h2>
                Total Gasto: R${price.totalPrice}
            </h2>
        </div>
    )
}

export default HistoryProducts