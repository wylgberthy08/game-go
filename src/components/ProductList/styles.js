import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer:{
      width:'48%',
      marginTop:15,
      marginRight:5,
      marginLeft:5,
      padding:5,
      alignItems:'center',
      backgroundColor:'#fff',
      borderRadius:12,
      elevation:2,
      justifyContent:'space-between'

    },
    img:{
      width:100,
      height:100,
      marginTop:10,
    },
    buttonCart:{
      backgroundColor:'#05bcff',
      width:50,
      height:30,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10
    },
    buttonText:{
      color:'#fff'
    },
    name:{
      color:'#000',
      fontSize:15,
      fontWeight:'bold'
    },
    price:{
      color:'#05ff22',
      fontSize:14,
      fontWeight:'bold'
    },
    score:{
      color:'#000',
      fontSize:18,
      fontWeight:'bold'
    }
  })

export default styles;