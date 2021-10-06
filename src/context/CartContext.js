import React,{createContext, useState, useContext, useEffect} from 'react';
import uuid from 'react-native-uuid';



const CartContext = createContext()
 



 export default function CartProvider({children}) {
    
    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState()

    useEffect(()=>{ 
        let value = 0
        cart.map((item)=>{
            value = value + item.item.price
        })
        setTotalValue(value)
    },[cart])
 
    //Função que adiciona um novo produto no carrinho
    function add (item){
        const newId = uuid.v4(); 
         const newItem = {
             id:newId,
             item
         } 

        const newCart = [
            ...cart,
            newItem
        ]
         
         setCart(newCart)

        
        
    }
    
    //Função que remove um produto do carrinho
    function remove(index){
        let newCart = cart.filter((item,i)=> i !== index)


        setCart([...newCart])
    }
    
    const store = {
        add,
        cart,
        totalValue,
        remove
    }

    return(
        <CartContext.Provider value ={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext)

    const {
        cart,
        add,
        totalValue,
        remove
    } = context

    return{
        cart,
        add,
        totalValue,
        remove
    }
}
