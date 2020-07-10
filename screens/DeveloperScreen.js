import  React from 'react';
import {Image,Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons'



export default function DeveloperScreen({navigation}){

return(

    <View>
    <View  style={{borderBottomWidth:1,borderBottomColor:"black",flex:3}}>  
         <Image  source={require('../assets/images/img.jpg')} style={{borderRadius:40,height:80,width:80,marginBottom:10}}  />
    </View>

    <View  style={{flex:4}}>
        <Ionicons  name="ios-forward" />
    </View>

     
     <View  style={{marginTop:530,marginLeft:120}}>
         <Text>@Appau Samuel</Text>
     </View>
    </View>
)
}
