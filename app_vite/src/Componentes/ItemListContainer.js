import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where, doc} from 'firebase/firestore'
import { db } from '../firebase'

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
                const productsAdapted = response.docs.map(docs =>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })    
    })
  
}
export default ItemListContainer