import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where, doc} from 'firebase/firestore'
import { db } from '../firebase' 
import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting})=> {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const { categoryId} = useParams()

    useEffect (() => {
        setLoading(true)
            
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection (db, 'products')
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                console.log(productsAdapted, "Hooa")
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })    
    }, [])
    return(
        <div>
            <ItemList products={products}></ItemList> 
        </div>
    )
}
export default ItemListContainer