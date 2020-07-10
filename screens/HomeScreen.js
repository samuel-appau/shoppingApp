import  React from 'react';
import { AppRegistry,View, Text, StyleSheet,TextInput,ScrollView,FlatList,Image,Button } from 'react-native';
import Menu from '../navigation/Menu'
import { Ionicons } from '@expo/vector-icons';
import Slideshow from 'react-native-slideshow';

export default function HomeScreen(){
  return (
    <View  style={styles.container}>
       <View   style={{flexDirection:"row"}}>
          <View style={{flex:4}}>
                 <Menu/>
           
          </View>

          <View  style={{flex:10,marginLeft:60}}>
                 <Text style={{fontWeight:'bold',fontSize:20}}>JUMIA</Text>
          </View>

          <View  style={{flex:4,marginRight:-40}}>
            <Ionicons
                    name="ios-cart"
                    size={24}
                    style={{marginRight:40,marginTop:5}}
                />
                <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22,marginLeft:15}}>
                  <Text style={{color:"white",fontWeight:'bold'}}>6</Text>
                  </View>
                
          </View>
      
            
      </View>

<ScrollView>
      <View>
        <TextInput
        placeholder='Search for Products or Item'
        style={{borderWidth:1,width:350,height:40,marginLeft:9,marginTop:20}} />
      </View> 

      <View  style={{height:100,marginTop:5,width:"98.5%",marginLeft:2,marginBottom:100}}>
      <Slideshow 


      dataSource={ [
          {
            title: 'Title 1',
            caption: 'Caption 1',
            url: 'http://placeimg.com/640/480/any',
          }, {
            title: 'Title 2',
            caption: 'Caption 2',
            url: 'http://placeimg.com/640/480/any',
          }, {
            title: 'Title 3',
            caption: 'Caption 3',
            url: 'http://placeimg.com/640/480/any',
          },
        ]
      }
     />
      </View>
            
      
      <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch'}}>
         
           <View style={styles.container1}> 
           <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
              
              <Image source={require('../assets/images/1.jpg')}  style={{width:100,height:70}} />
              <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} />
                <Text></Text>
            </View>
          </View>
          <View style={styles.container1}> 
            <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>

              <Image source={require('../assets/images/2.jpg')}  style={{width:100,height:70}} />
              <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} />
                <Text></Text>
            </View>
          </View>
          <View style={styles.container1}> 
          <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
              <Image source={require('../assets/images/4.jpg')}  style={{width:100,height:70}} />
              <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>alert("Click")}/>
                <Text></Text>
            </View>
          </View>
          
         
         
       </View>
        
         

          
      <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch',marginTop:-10}}>
         
         <View style={styles.container1}> 
         <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-80,marginTop:-15}}/>
            <Image source={require('../assets/images/1.jpg')}  style={{width:100,height:68}} />
            
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} />
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
        <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/2.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} />
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
           <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/4.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}}  />
                <Text></Text>
            </View>
        </View>
        
       
       
     </View>
      
       
        


  <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch',marginTop:-10}}>
         
         <View style={styles.container1}> 
         <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-80,marginTop:-15}}/>
            <Image source={require('../assets/images/1.jpg')}  style={{width:100,height:68}} />
            
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} />
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
        <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/2.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} />
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
           <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/4.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('Sidebar')} />
                <Text></Text>
            </View>

        </View>

      </View>





      <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch',marginTop:-10}}>
         
         <View style={styles.container1}> 
         <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-80,marginTop:-15}}/>
            <Image source={require('../assets/images/1.jpg')}  style={{width:100,height:68}} />
            
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} />
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
        <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/2.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} />
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
           <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/4.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('Sidebar')} />
                <Text></Text>
            </View>

        </View>

      </View>
        
       </ScrollView>

       </View>
       
      
      );

    }
   
         



  const styles=StyleSheet.create({
    container1:{
      borderWidth:2,
        borderColor:'red',
        padding:10,
        height:120,
        width:"30%",
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
        marginRight:4
    },
    container:{flex:1}


});



