import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height:100,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor:'#ed0758',
        borderBottomWidth:2
        
    },

    orderContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        backgroundColor:'#118fbd',
        marginBottom:6,
        borderBottomColor:'#ed0758',
        borderBottomWidth:2
        
    },
    ordertitle: {
        fontSize: 18,
        borderRadius: 5,
        marginLeft: 10
    },
    order: {
        margin:2,
        padding:4,
        backgroundColor: '#05bcff',
        alignContent: 'center',
        justifyContent: 'center',
        elevation:5,
        borderRadius:5
        
    },
    orderText: {
        borderRadius: 10,
        fontSize: 16,
        color:'#fff',
        fontWeight:'bold'
    },
    list: {
       paddingLeft:5,
       paddingRight:5
    },
    areaLista:{
        flex:1
    },
   

})

