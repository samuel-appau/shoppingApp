import React from 'react';
import { View, StyleSheet,Text,Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Menu from '../navigation/Menu';
import MenuButton from '../components/Menubar'

export default function LinksScreen({navigation}) {
  return (
          <View style={styles.container}>  
          <View style={{borderBottomColor:'#000',marginTop:18,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'black'}}>
          <MenuButton  navigation={navigation}/>
          <Text style={{fontSize:20,fontWeight:'bold',marginLeft:69}}>SHOPPING APP</Text>
          <Image  source={require('../assets/images/logo.jpg')}  style={{width:40,height:40,marginTop:-9}} />
      </View>
          </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    
  },
  Text:{
    alignItems:'center',
    justifyContent:'center',
    padding:190
  }
});
