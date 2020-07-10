import  React from 'react';
import { AppRegistry,View, Text, StyleSheet,TextInput,ScrollView,FlatList,TouchableOpacity,Image,Button } from 'react-native';
import Menu from '../navigation/Menu'
import { Ionicons } from '@expo/vector-icons';
import Slideshow from 'react-native-slideshow';
import MenuButton from '../components/Menubar'
import  LinksScreen from '../screens/LinksScreen'

export default function Sidebar({navigation}){
  return (
    <View  style={styles.container}>
       <View   style={{flexDirection:"row",borderBottomColor:"ash",borderBottomWidth:1,marginTop:34,backgroundColor:"ash"}}>
          <View style={{flex:4}}>
               
                 <MenuButton navigation={navigation} />
                 <TouchableOpacity   onPress={()=>navigation.navigate('menu')} style={{marginTop:20,marginLeft:10,paddingTop:2}}>
                     <Text>Menu</Text>
                 </TouchableOpacity>
          </View>

          <View  style={{flex:10,marginLeft:-8,flexDirection:'row'}}>
             <Text style={{fontWeight:'bold',fontSize:20}}>SHOPPING APP</Text> 

                <Image  source={require('../assets/images/logo.jpg')}  style={{width:40,height:40,marginTop:-9}} />
                 
          </View>
          

          <View  style={{flex:4,marginRight:-40}}>
            <Ionicons
                    name="ios-cart"
                    size={24}
                    style={{marginRight:40,marginBottom:-4}}
                />
                <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22.5,marginLeft:15}}>
                  <Text style={{color:"white",fontWeight:'bold'}}>0</Text>
                  </View>
                
          </View>
      
            
      </View>


      <View>
        <TextInput
        placeholder='Search for Products or Item'
        style={{borderWidth:1,width:370,height:40,marginLeft:2,marginRight:-2,marginTop:1}} />
      </View> 
     
      <ScrollView>
      <View  style={{height:100,marginTop:5,width:"98.5%",marginLeft:2,marginBottom:100}}>
      <Slideshow 


      dataSource={ [
          {
            title: 'Iphone,Samsung,Infinix',
            caption: 'Get your phones at affordable prices',
            url:'https://cdn.mos.cms.futurecdn.net/TJDYpZN3r8B7onh2imuNah.jpg',
          }, {
            title: 'Laptops available',
            caption: '20% discount off',
            url: 'https://cnet3.cbsistatic.com/img/S_hTE56MZz5WhYJ0bmCLl78MVzM=/756x425/2019/03/25/293b3f00-4c96-4066-b3b0-6f4a193db43e/036-samsung-notebook-9-pro.jpg',
          }, {
            title: 'Dell machine with high specs',
            caption: 'Quality laptops ',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUrl-lSMjsKSN5MxT3YW0IqO9hyf37hA9whiGUIK3PtmurBONU',
          },
          {
            caption: 'Addidas,Nike an many more',
            url: 'https://images.unsplash.com/photo-1570037276380-c3c19487a76d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          },
          {
            title: 'Television 32 inches flatscreen',
            caption: 'High graphics display',
            url:"https://images.unsplash.com/photo-1582787231541-3a44fa5dc7c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          }
        ]
      }
     />
      </View>
            
      
      <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch'}}>
         
           <View style={styles.container1}> 
           <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
              
              <Image source={require('../assets/images/5.jpg')}  style={{width:100,height:70}} />
              <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}}  onPress={()=>navigation.navigate('tv')} />
                <Text></Text>
            </View>
          </View>
          <View style={styles.container1}> 
            <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>

              <Image source={require('../assets/images/6.jpg')}  style={{width:100,height:70}} />
              <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}}  onPress={()=>navigation.navigate('shoes')} />
                <Text></Text>
            </View>
          </View>
          <View style={styles.container1}> 
          <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
              <Image source={require('../assets/images/7.jpg')}  style={{width:100,height:70}} />
              <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('laptops')}/>
                <Text></Text>
            </View>
          </View>
          
         
         
       </View>
        
         

          
      <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch',marginTop:-10}}>
         
         <View style={styles.container1}> 
         <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-80,marginTop:-15}}/>
            <Image source={require('../assets/images/8.jpg')}  style={{width:100,height:68}} />
            
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('tv')}/>
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
        <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/9.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}}  onPress={()=>navigation.navigate('phones')} />
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
           <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/10.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('laptops')} />
                <Text></Text>
            </View>
        </View>
        
       
       
     </View>
      
       
        


  <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch',marginTop:-10}}>
         
         <View style={styles.container1}> 
         <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-80,marginTop:-15}}/>
            <Image source={require('../assets/images/15.jpg')}  style={{width:100,height:68}} />
            
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}}  onPress={()=>navigation.navigate('menu')}/>
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
        <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/14.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}}  onPress={()=>navigation.navigate('laptops')}/>
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
           <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/12.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('desc')} />
                <Text></Text>
            </View>

        </View>

      </View>





      <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'stretch',marginTop:-10}}>
         
         <View style={styles.container1}> 
         <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-80,marginTop:-15}}/>
            <Image source={require('../assets/images/14.jpg')}  style={{width:100,height:68}} />
            
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('menu')} />
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
        <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/11.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('shoes')}/>
                <Text></Text>
            </View>
        </View>
        <View style={styles.container1}> 
           <Ionicons name='ios-heart'  size={17}  color='red'  style={{marginRight:-70,marginTop:-20}}/>
            <Image source={require('../assets/images/15.jpg')}  style={{width:100,height:70}} />
            <View style={{marginBottom:-16,paddinTop:-2,borderWidth:1,borderRadius:25,width:58,height:26.5,justifyContent:'center',borderColor:'red',alignContent:'center',backgroundColor:'#b3d9ff',marginTop:2}}>
                <Button title='view'  color='white' style={{marginTop:-10}} onPress={()=>navigation.navigate('menu')} />
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



