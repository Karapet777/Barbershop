import React from 'react'

import Button from '../../components/Button/Button'
import List from '../../components/list/List'
import img1 from '../../assets/img/product-1.jpg'
import img2 from '../../assets/img/product-2.jpg'
import img3 from '../../assets/img/product-3.jpg'
import img4 from '../../assets/img/product-4.webp'
import img5 from '../../assets/img/product-5.jpg'
import img6 from '../../assets/img/product-6.webp'




import './Shop.css'

const Shop = () => {
    const shop = {
        product: [
            { src: img1, product: 'НАБОР ДЛЯ ПУТЕШЕСТВИЙ', productName: '«BAXTER OF CALIFORNIA»', cost: '2.900р' },
            { src: img2, product: 'Увлажнаущая кондиционер', productName: '«BAXTER OF CALIFORNIA»', cost: '750р' },
            { src: img3, product: 'Гель для волос', productName: '«SUAVECITO»', cost: '290р' },

        ],
        productCrem: [
            { src: img4, product: 'Глина для укладки волос', productName: '«AMERICAN CREW»', cost: '500р' },
            { src: img5, product: 'Гел для волос', productName: '«AMERICAN CREW»', cost: '300р' },
            { src: img6, product: 'Набор для бритья', productName: '«BAXTER OF CALIFORNIA»', cost: '3.900р' },

        ]
    }
    return (
        <div className='app-shop-container'>


            <div>
                <p className='app-title'>Срества для ухода</p>
                <p className='app-title'>Производители:</p>
            </div>
            <div className='app-shop-block'>
                <div className='app-shop-variants'>
                    <Button title='Baxter of California' className='app-btn-show' />
                    <Button title='Mr Natty' className='app-btn-show' />
                    <Button title='Suavecito' className='app-btn-show' />
                    <Button title='Malin-Goetz' className='app-btn-show' />
                    <Button title='Murray`s' className='app-btn-show' />
                    <Button title='American Crew' className='app-btn-show' />
                </div>
                <div className='app-shop-products'>
                    <div className='app-list-product'>
                        {shop.product.map((elem, index) => {
                            return (

                                <List
                                    key={index}
                                    src={elem.src}
                                    product={elem.product}
                                    productName={elem.productName}
                                    cost={elem.cost}
                                />
                            )
                        })}
                    </div>
                    <div className='app-list-product'>
                        {shop.productCrem.map((elem, index) => {
                            return (
                                <List
                                    key={index}
                                    src={elem.src}
                                    product={elem.product}
                                    productName={elem.productName}
                                    cost={elem.cost}
                                />
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>



    )
}
export default Shop