import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                productInfo: [...state.productInfo, action.payload],
                actionType: 'add',
                actionFlag: true,
                actionMessage: 'Product Added!'
            }
        
        case 'REMOVE':
            return {
                ...state,
                productInfo: state.productInfo.filter((product) => {
                    return product.id !== action.payload
                }),
                actionType: 'remove',
                actionFlag: true,
                actionMessage: 'Item removed!'
            }
        
        case 'REMOVE_MESSAGE':
            return {
                ...state,
                actionFlag: false
            }

        default:
            return state;
    }
}

const GroceryStore = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const [products, dispatch] = useReducer(reducer, {
        productInfo: [
            {
                id: 1,
                name: 'Cabbage',
                price: '20Tk/pcs'
            },
            {
                id: 2,
                name: 'Carrot',
                price: '30Tk/kg'
            }
        ],
        actionType: '',
        actionFlag: false,
        actionMessage: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: new Date().getTime().toString(),
            name: productName,
            price: productPrice
        }
        setProductName('');
        setProductPrice('');
        console.log(newProduct);
        dispatch({type: 'ADD', payload: newProduct});
        setTimeout(() => {
            dispatch({type: 'REMOVE_MESSAGE'});
        }, 2000);
    }

    const handleRemove = (id) => {
        dispatch({type: 'REMOVE', payload: id});
        setTimeout(() => {
            dispatch({type: 'REMOVE_MESSAGE'});
        }, 2000);
    }

    return (
        <div style={{marginTop: '2rem'}}>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '0.4rem'}}>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter product name" />
                </div>
                <div style={{marginBottom: '0.4rem'}}>
                    <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="Enter product price" />
                </div>
                <div>
                    <button type="submit">Add product</button>
                </div>
            </form>
            {products.actionFlag && <p style={products.actionType === 'add' ? {color: 'green'} : {color: 'red'}}>{products.actionMessage}</p>}
            <p style={{margin: '1.4rem 0 0.6rem 0'}}>
                <strong>All products:</strong>
            </p>
            <ol style={{marginLeft: '1rem'}}>
                {products.productInfo.map((product) => {
                    return (
                        <li key={product.id}>
                            {console.log(product)}
                            <strong style={{color: 'green'}}>{product.name}</strong>
                            <span> --- {product.price}</span>
                            <button onClick={() => handleRemove(product.id)}>Remove</button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

export default GroceryStore;