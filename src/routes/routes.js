import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import CartProvider, {useCart} from '../context/CartContext';
import { AntDesign } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

export default function Routes() {
 return (

    <CartProvider>
     <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon:IconWithHome}} />
            <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon:IconWithBadge} } />
        </Tab.Navigator>
     </NavigationContainer>

    </CartProvider>
   
  );
}

function IconWithBadge(){
    
    const {cart} = useCart()

    return(
        <View style={styles.badge}>
            <Text style={{backgroundColor:'#d10228', color:'#fff', padding:5, borderRadius:10}}>{Object.keys(cart).length}</Text>
            <AntDesign name="shoppingcart" size={24} color="black" />
        </View>
    )
}


function IconWithHome(){
    
    const {cart} = useCart()

    return(
        <View style={styles.badge}>
          <AntDesign name="home" size={24} color="black" />
        </View>
    )
}
const styles = StyleSheet.create({
    cart:{
        width:30,
        height:24 ,
        margin:5,
        alignItems:'center',
        justifyContent:'center',
       
     },

     badge:{
        flex:1,
        flexDirection:'row',
        width:24, 
        height:24, 
        margin:5, 
        alignItems:'center', 
        justifyContent:'center',}
})