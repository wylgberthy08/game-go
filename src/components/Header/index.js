import React from 'react';
import { View, Image } from 'react-native';

export default function Header() {
 return (
    <View>
       <Image
        style={{width:130, height:101, marginBottom:3}}
        source={require('../../assets/logo5.png')}
       />
    </View>
  );
}