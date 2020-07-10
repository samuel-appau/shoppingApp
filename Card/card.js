import React from 'react'
import {View,StyleSheet,Image} from 'react-native'



const Card=()=>{
    return(
        <View  style={styles.container}>
          <Image source={require('../assets/images/2.jpg')}  style={{width:40,height:45}} />
        </View>
    )
}





const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'red',
        padding:10,
        height:120,
        width:"34%",
        borderRadius:10, 
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        shadowOffset:{width:0 ,height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        marginRight:6
    },


});

export default Card;