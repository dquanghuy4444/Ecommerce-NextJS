import React from 'react';
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../store/global-state'

function Cart (){
    const { state, dispatch } = useContext(DataContext)
    const { cart, auth, orders } = state

    if( cart.length === 0 ) 
        return <img className="img-responsive w-100" src="/empty_cart.jpg" alt="not empty"/>
    
    return (
        <div>
            Cart
        </div>
    )
}

export default Cart;