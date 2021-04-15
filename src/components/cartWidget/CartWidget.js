import React from 'react';
import './CartWidget.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


export default function CartWidget(){

    return(
    <div>
    
        <ShoppingCartOutlinedIcon fontSize="large" className="cart" />
    
    </div>
    )
    
}