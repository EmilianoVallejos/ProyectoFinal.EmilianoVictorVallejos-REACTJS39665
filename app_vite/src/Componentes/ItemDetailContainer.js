import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState (true)

    const {ItemId} = useParams()
  
    useEffect (()=> {
        setLoading(true)

        const docRef = doc (db, 'products', ItemId)

        getDoc(docRef)
            .then (response =>{
              const data = response.data()  
              const productsAdapted = { id: response.id. data}
              setProduct (productsAdapted)
            })
            .catch(error => {
              console.log (error)
            })  
            .finally(()=>{
              setLoading(false)
            })
          }, [ItemId])
        }
export default ItemDetailContainer
