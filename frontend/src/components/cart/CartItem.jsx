import React from 'react';
import axios from 'axios';
import { baseApiUrl } from '../../global';
import { useSelector } from 'react-redux';
import {notifyError, notifySuccess} from '../../config/msgs'
import '../../styles/ProductItem.css'

const CartItem = ({ product }) => {
    const user = useSelector(state => state.user);

    const remove = async () => {
        try {
            await axios.delete(`${baseApiUrl}/cart/${user.id}/${product.id}`);
            notifySuccess('Produto removido do carrinho com sucesso!')
        } catch (error) {
            notifyError('Erro ao remover o produto do carrinho.');
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
                <button className="btn btn-danger" onClick={remove}>
                    <i className='fa fa-minus'> Remover</i>
                </button>
            </div>
        </div>
    );
};

export default CartItem