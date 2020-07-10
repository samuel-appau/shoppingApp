import  React,{useState} from 'react';
import { AppRegistry,View, Text, StyleSheet,TextInput,ScrollView,FlatList,TouchableOpacity,Image,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ArrowButton from '../../components/Arrow'
export default function Payment({navigation}){
  const arr=navigation.getParam('arr',[]);
  const [element,updateElement]=useState(arr);

  
  const handleDelete=(itemId)=>{
    updateElement(element.filter((item)=> item.age!== itemId))
  }

  return (
    
    <View >
       <View   style={{flexDirection:"row",borderBottomColor:"ash",borderBottomWidth:1,marginTop:34,backgroundColor:"ash"}}>
          <View style={{flex:4}}>
              <ArrowButton  navigation={navigation} />
          </View>

          <View  style={{flex:10,marginLeft:-8,flexDirection:'row'}}>
             <Text style={{fontWeight:'bold',fontSize:20}}>SHOPPING APP</Text> 
                <Image  source={require('../../assets/images/logo.jpg')}  style={{width:40,height:40,marginTop:-9}} />
                 
          </View>
          <View  style={{flex:4,marginRight:-40}}>
            <Ionicons
                    name="ios-cart"
                    size={24}
                    style={{marginRight:40,marginBottom:-4}}
                />
                <View  style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22.5,marginLeft:15}}>
                  <Text style={{color:"white",fontWeight:'bold'}}>{arr.length}</Text>
                </View>
                
          </View>
      
           
      </View>
    

        <View>
          <ScrollView>
              {arr.map((item)=>{
              return(
                <View key={item.age}  style={{height:260,width:"90%", borderRadius:10,marginLeft:20, 
              marginVertical:10,
              alignItems:'center',
              justifyContent:'center',
              shadowColor:'black',
              shadowOffset:{width:0 ,height:2},
              shadowRadius:6,
              shadowOpacity:0.26,
              backgroundColor:'white',
              flexDirection:'column'}}>
          <View  style={{flex:8}}>
             <Image  style={{backgroundColor:"#000",height:120,width:"90%"}} source={{uri:"https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/motorola-charm-with-motoblur.1.jpg"}}  />
          </View>

          <View style={{flexDirection:'column',flex:2}}>
             
            <Text style={{fontSize:20,fontWeight:'bold'}}>
                 MOTOROLA-CHARM
            </Text>
            <Text style={{fontSize:21,color:"red",fontWeight:'bold',marginLeft:80}}>
               $256
            </Text>
             </View>
         <View style={{flex:5,marginRight:-10,marginBottom:-30,marginTop:20}}>
           <View  style={{backgroundColor:"red",borderRadius:10}}>
            <Button title="Delete"  onPress={handleDelete}  color="white"/>
           </View>
        </View>
         </View>
              )
            })  }     
         </ScrollView>
        </View>
</View>
  )};