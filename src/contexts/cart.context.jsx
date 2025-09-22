import { createContext, useState } from "react";

export const CartContext = createContext({
    isDropdown: false,
    setContext: () => {}
});

export const CartProvider = ({children}) => {
    const [isDropdown, setContext] = useState(false);
    const value = {isDropdown, setContext}
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}