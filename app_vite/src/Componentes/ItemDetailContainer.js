import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { toast } from 'react-toastify';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState (true)

    const {Id} = useParams()
  
    useEffect (()=> {
      toast.warning ("Oferta por tiempo limitado!",{ theme: "colored", position: 'top-center', autoClose: 2200,})
        setLoading(true)

        const docRef = doc (db, 'products', Id)

        getDoc(docRef)
            .then (response =>{
              const newItem = {id: response.id,
              ...response.data(),
            };
            setProduct(newItem)
            })
            .catch(error => {
              console.log (error)
            })  
            .finally(()=>{
              setLoading(false)
            })
          }, [Id])
          return (
            <ItemDetail {...product} />
            )
        }

export default ItemDetailContainer
