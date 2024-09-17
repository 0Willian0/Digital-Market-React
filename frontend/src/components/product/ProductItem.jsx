import React from 'react';
import axios from 'axios';
import { baseApiUrl } from '../../global';
import { useSelector } from 'react-redux';
import {notifyError, notifySuccess} from '../../config/msgs'
import '../../styles/ProductItem.css'

const ProductItem = ({ product }) => {
    const user = useSelector(state => state.user);

    const save = async () => {
        try {
            await axios.post(`${baseApiUrl}/cart/${user.id}/${product.id}`);
            notifySuccess('Produto adicionado ao carrinho com sucesso!')
        } catch (error) {
            notifyError('Erro ao adicionar o produto ao carrinho.');
        }
    };

    return (
        <div className="product-item">
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
                <button className="btn btn-success" onClick={save}>
                    <i className='fa fa-plus'> Carrinho</i>
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
