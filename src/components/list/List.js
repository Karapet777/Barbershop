import React from 'react'

import Button from '../Button/Button'
import './List.css'

const List = ({ src, product, productName, cost }) => {
    return (
        <div className='app-list-block'>
            <img className='img' src={src} alt='img-product' />
            <div>
                <p>{product}</p>
                <p className='product-text'>{productName}</p>
            </div>
            <div className='app-cost-block'>
                <p className='app-text-cost'>{cost}</p>
                <Button title='Купить' className='btn-list' />
            </div>
        </div>
    )
}
export default List