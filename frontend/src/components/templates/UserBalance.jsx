import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { baseApiUrl } from "../../global";
import axios from 'axios'
import '../../styles/UserBalance.css'

const UserBalance = ()=>{
    const [users,setUsers] = useState({})
    const user = useSelector((state) => state.user)

    const getBalance = ()=>{
        const url = `${baseApiUrl}/users/${user.id}`
        axios.get(url).then(res=>{
            setUsers(res.data)
        })
    }

    useEffect(()=>{
        getBalance()
    },[])
    
    return(
        <div className="user-balance">
            <span className="d-none d-sm-block fa fa-money fa-lg"> {users.balance}</span>
        </div>
    )
}

export default UserBalance