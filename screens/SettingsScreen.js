import React,{useState} from 'react';
import {Button,View,Text,StyleSheet, Image} from 'react-native'
import MenuButton from '../components/Menubar'




const ProductItems=
  [{"id":0,"name":"iPhone 6S","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-6s-plus/silver/device-front.png","price":799},{"id":1,"name":"iPhone 5S","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"https://media.idownloadblog.com/wp-content/uploads/2013/09/Gray-iPhone-5s-back.png","price":349},{"id":2,"name":"Macbook","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"http://www.icentar.me/mac/macbook/images/pro.jpg","price":1499},{"id":3,"name":"Macbook Air","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"http://www.icentar.me/mac/mbair/images/air.jpg","price":999},{"id":4,"name":"Macbook Air 2013","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"http://www.icentar.me/mac/mbair/images/air.jpg","price":599},{"id":5,"name":"Macbook Air 2012","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"http://www.icentar.me/mac/mbair/images/air.jpg","price":499}];
    
export default function SettingsScreen({navigation}) {

  const [products,setProducts]=useState(ProductItems);
 
  function addProductToCart(product){
    const newProduct={
      name:product.name,
      id:product.id,
      price:product.price,
      imageUrl:product.imageUrl
    }
    updateCart([newProduct,...cart]);
  }

 
  

  return(
    <View style={styles.container}>
    <View style={{borderBottomColor:'#000',marginTop:32,flexDirection:'row'}}>
          <MenuButton  navigation={navigation}/>
          <Text style={{fontSize:20,fontWeight:'bold',marginLeft:69}}>SHOPPING APP</Text>
          <Image  source={require('../assets/images/logo.jpg')}  style={{width:40,height:40,marginTop:-9}} />
      </View>
      {products.map(product=>{
        return(
          <View key={product.key}  style={{borderWidth:1,borderColor:"blue", justifyContent:'space-between',marginVertical:10,paddingHorizontal:20,display:"flex",flexDirection:'row',alignItems:'center'}}>
          <View  style={{flex:2}}>
             <Image  style={{backgroundColor:"#000",borderRadius:40,height:40,width:40}} source={{uri:"https://www.boostmobile.com/content/dam/boostmobile/en/products/phones/apple/iphone-6s-plus/silver/device-front.png"}}  />
          </View>

          <View style={{flexDirection:'row',flex:8}}>
             
            <Text style={{fontSize:20}}>
                 {product.name}
            </Text>
            <Text style={{fontSize:10,color:"red"}}>
               ${product.price}
            </Text>
             </View>
         <View style={{flex:5,marginRight:-26}}>
         <Button title="Add to Cart"  onPress={()=>addProductToCart(products)}   />
        </View>
       

       

      

         </View>

       
        )
      })}

      <View style={{margin:10}}>
        <Text style={{fontSize:25}}>
       Total Items in a cart:{cart.length}
        </Text>
      </View>
   

    
    </View>
  )

};
 

 const styles=StyleSheet.create({
   container:{
     flex:1,
 

   }
 })