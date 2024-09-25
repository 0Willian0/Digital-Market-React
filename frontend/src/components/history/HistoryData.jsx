import React from "react";
import '../../styles/HistoryData.css'
import { Link } from "react-router-dom";

const HistoryData = ({history})=>{

    return(
        <div className="history-data">
            <div class="history-item-info">
                <Link
                to={{
                    pathname: "/historyProducts",
                    search: `?dateBuyed=${encodeURIComponent(new Date(history.dateBuyed).toLocaleDateString())}`,
                }}>
                    <h2>{new Date(history.dateBuyed).toLocaleDateString()}</h2>
                </Link>
                
            </div>
        </div>
    )
}

export default HistoryData