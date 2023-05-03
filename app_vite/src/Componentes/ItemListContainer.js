import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts, getProductById} from '../AsyncMock/AsyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting})=> {
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams ()

    useEffect (() => {
        const asyncFunc = categoryId ? getProductById : getProducts

        asyncFunc(categoryId)
            .then(response=>{
                setProducts(response)
            })
            .catch (error =>{
                console.error (error)
            })
        }, [categoryId])
    
        return (
            <div>
                <h3>{greeting}</h3>
                <ItemList products={products}/>
            </div>
        )}
export default ItemListContainer