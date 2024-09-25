import React, { useEffect, useState } from "react";
import PageTitle from "../templates/PageTitle";
import { useSelector } from "react-redux";
import { baseApiUrl } from "../../global";
import axios from "axios";
import HistoryData from "./HistoryData";
import '../../styles/History.css'

const History = ()=>{
    const user = useSelector((state)=>state.user)
    const [histories, setHisories] = useState([])

    const getHistory = ()=>{
        const url = `${baseApiUrl}/history/${user.id}`
       axios(url).then(res=>{
            setHisories(res.data)
       })
   }

   useEffect(()=>{
        getHistory()
   },[])

    return(
        <div className="history">
            <PageTitle icon="fa fa-history" main="Histórico"/>
            <ul>
            {histories.map(history => (
                <li key={history.id}><HistoryData history={history}/></li>
            ))}
            </ul> 
        </div>
    )
}

export default History