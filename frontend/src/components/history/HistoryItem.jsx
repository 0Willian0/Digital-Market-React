import React from "react";
import '../../styles/HistoryItem.css'

const HistoryItem = ({product})=>{

    const formatTime = (dateBuyed)=> {
        if (!dateBuyed) return '';  // Caso a data seja nula ou indefinida
  
        const date = new Date(dateBuyed);  // Converter o timestamp em um objeto Date
        // Converter para o horário de Brasília (GMT-3) e retornar apenas a hora
        return date.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    }

    return(
        <div className="history-item">
            <div className="product-item-image d-none d-sm-block">
                {product.imageUrl ? (
                    <img src={product.imageUrl} height="150" width="150" alt="Product" />
                ) : (
                    <img src="/assets/product.png" height="150" width="150" alt="Product" />
                )}
            </div>
            <div className="product-item-info">
                <h2>{product.name}</h2>
                <p>R${product.price}</p>
                <p>Horario: {formatTime(product.dateBuyed)}</p>
            </div>
        </div>
    )
}

export default HistoryItem