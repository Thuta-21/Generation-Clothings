import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItem contain producttoAdd
    const existingCartItem = cartItems.find(item => 
        item.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(item => 
            item.id === productToAdd.id
            ? {...item, quantity: item.quantity+1}
            : item);
    }

    return [...cartItems, {...productToAdd, quantity:1}]
    // if found increase quantity

    // return new array with modified cartItem/new cartItem

}

export const CartContext = createContext({
    isDropdown: false,
    setContext: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isDropdown, setContext] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setcartCount] = useState(0);

    useEffect(()=>{
        const cartCount = cartItems.reduce((total, cartItem)=>{ return total + cartItem.quantity }, 0)
        setcartCount(cartCount);
    },[cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {isDropdown, setContext, addItemToCart, cartItems, cartCount}
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}