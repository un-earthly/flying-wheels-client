import React from 'react'
import { useParams } from 'react-router-dom'

export default function PurchaseProduct() {
    const { id } = useParams()
    return (
        <div>PurchaseProduct : {id} </div>
    )
}
