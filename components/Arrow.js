import React,{Component} from 'react'
import {StyleSheet }  from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { TouchableOpacity,ViewProperties } from 'react-native';
import Sidebar from '../screens/Sidebar'


export default class ArrowButton extends Component{
    render(){
        
        return(
          
            <Ionicons  
               name="md-arrow-back"
               color="#000"
               size={32}
               style={styles.menuicon}
               onPress={()=>this.props.navigation.navigate('Main')}
               
            />
            
        )
    }
}


const styles=StyleSheet.create({
    menuicon:{
        zIndex:9,
        position:'absolute',
        top:-4,
        left:15,
        
    }
})
