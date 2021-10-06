import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { useCart } from '../../context/CartContext';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';


export default function ProductList({data, index}) {
 
  const {add} = useCart()

 return (
   <View style={styles.cardContainer} >
     <Image 
      style={styles.img}
      source={data.image}
     />
     <Text style={styles.name}>{data.name} </Text>
     <Text style={styles.price}>R$ {data.price}</Text>
     <Text style={styles.score}>Score: {data.score}</Text>
       
     <TouchableOpacity style={styles.buttonCart} onPress={()=>add(data)}>
       <AntDesign name="shoppingcart" size={24} color="#fff" />
     </TouchableOpacity>


   </View>
       
    
  );
}

