import React,{useState} from 'react';
import { View, StyleSheet,Text,Image ,Button, ScrollViewComponent} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';
import ArrowButton from '../../components/Arrow'
import { ScrollView } from 'react-native-gesture-handler';

const PhoneItems=[
  {
      "age": 0, 
      "id": "motorola-xoom-with-wi-fi", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/droid-2-global-by-motorola.2.jpg?raw=true", 
      "name": "Motorola XOOM\u2122 with Wi-Fi", 
      "price":"976",
      "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
  }, 
  {
      "age": 1, 
      "id": "motorola-xoom", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/motorola-xoom-with-wi-fi.3.jpg", 
      "name": "MOTOROLA XOOM\u2122", 
      "price":"589",
      "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
  }, 
  {
      "age": 2, 
      "carrier": "AT&amp;T", 
      "id": "motorola-atrix-4g", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/motorola-atrix-4g.1.jpg", 
      "name": "MOTOROLA ATRIX\u2122 4G", 
      "price":"889",
      "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
  }, 
  {
      "age": 3, 
      "id": "dell-streak-7", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/dell-streak-7.0.jpg", 
      "name": "Dell Streak 7", 
      "price":"659",
      "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
  }, 
  {
      "age": 4, 
      "carrier": "Cellular South", 
      "id": "samsung-gem", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/samsung-gem.1.jpg", 
      "name": "Samsung Gem\u2122", 
      "price":"659",
      "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
  }, 
  {
      "age": 5, 
      "carrier": "Dell", 
      "id": "dell-venue", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/dell-venue.1.jpg", 
      "name": "Dell Venue", 
      "price":"249",
      "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
  }, 
  {
      "age": 6, 
      "carrier": "Best Buy", 
      "id": "nexus-s", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/nexus-s.2.jpg", 
      "name": "Nexus S", 
      "price":"159",
      "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
  }, 
  {
      "age": 7, 
      "carrier": "Cellular South", 
      "id": "lg-axis", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/lg-axis.1.jpg", 
      "name": "LG Axis", 
      "price":"575",
      "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
  }, 
  {
      "age": 8, 
      "id": "samsung-galaxy-tab", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/samsung-galaxy-tab.1.jpg", 
      "name": "Samsung Galaxy Tab\u2122", 
      "price":"645",
      "snippet": "Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility."
  }, 
  {
      "age": 9, 
      "carrier": "Cellular South", 
      "id": "samsung-showcase-a-galaxy-s-phone", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/samsung-showcase-a-galaxy-s-phone.1.jpg", 
      "name": "Samsung Showcase", 
      "price":"1000",
      "snippet": "The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors"
  }, 
  {
      "age": 10, 
      "carrier": "Verizon", 
      "id": "droid-2-global-by-motorola", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/droid-2-global-by-motorola.1.jpg", 
      "name": "DROID\u2122 2 Global by Motorola", 
      "price":"997",
      "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
  }, 
  {
      "age": 11, 
      "carrier": "Verizon", 
      "id": "droid-pro-by-motorola", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/droid-pro-by-motorola.1.jpg", 
      "name": "DROID\u2122 Pro by Motorola", 
      "price":"559",
      "snippet": "The next generation of DOES."
  }, 
  {
      "age": 12, 
      "carrier": "AT&amp;T", 
      "id": "motorola-bravo-with-motoblur", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/motorola-bravo-with-motoblur.1.jpg", 
      "name": "MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122", 
      "price":"259",
      "snippet": "An experience to cheer about."
  }, 
  {
      "age": 13, 
      "carrier": "T-Mobile", 
      "id": "motorola-defy", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/motorola-defy-with-motoblur.0.jpg", 
      "name": "Motorola DEFY\u2122 ", 
      "price":"859",
      "snippet": "Are you ready for everything life throws your way?"
  }, 
  {
      "age": 14, 
      "carrier": "T-Mobile", 
      "id": "t-mobile-mytouch-4g", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/t-mobile-g2.1.jpg", 
      "name": "T-Mobile myTouch 4G", 
      "price":"959",
      "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
  }, 
  {
      "age": 15, 
      "carrier": "US Cellular", 
      "id": "samsung-mesmerize-a-galaxy-s-phone", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/samsung-galaxy-tab.4.jpg", 
      "name": "Samsung Mesmerize\u2122" , 
      "price":"659",
      "snippet": "The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors"
  }, 
  {
      "age": 16, 
      "carrier": "Sprint", 
      "id": "sanyo-zio", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/lg-axis.0.jpg", 
      "name": "SANYO ZIO", 
      "price":"1759",
      "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
  }, 
  {
      "age": 17, 
      "id": "samsung-transform", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/blob/master/app/img/phones/samsung-gem.0.jpg", 
      "name": "Samsung Transform", 
      "price":"259",
      "snippet": "The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d."
  }, 
  {
      "age": 18, 
      "id": "t-mobile-g2", 
      "imageUrl": "https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/t-mobile-g2.1.jpg",
      "price":"1259",
      "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
  }, 
  {
      "age": 19, 
      "id": "motorola-charm", 
      "imageUrl": 'https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/motorola-charm-with-motoblur.1.jpg', 
      "name": "Motorola CHARM\u2122 ", 
      "price":"1059",
      "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
  }
]




export default function Tv({navigation}) {


  const [products,setProducts]=useState(PhoneItems);
  const [cart,updateCart]=useState([]);
  function addProductToCart(product){
    const newProduct={
      name:product.name,
      id:product.id,
      price:product.price,
      imageUrl:product.imageUrl
    }
    updateCart([newProduct,...cart]);
  }

  return (
          <View style={styles.container}>  
          <View style={{borderBottomColor:'#000',marginTop:18,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'black'}}>
            <ArrowButton  navigation={navigation} />
          <Text style={{fontSize:20,fontWeight:'bold',marginLeft:69}}>SHOPPING APP</Text>
          <Image  source={require('../../assets/images/logo.jpg')}  style={{width:40,height:40,marginTop:-9}} />
         <View style={{marginLeft:70}}>
          <Ionicons
                    name="ios-cart"
                    size={24}
                    style={{marginBottom:-4}}
                />
          <View style={{borderRadius:40,width:17,height:17,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginTop:-22,marginLeft:15}}>
        <Text style={{fontSize:10,color:'white',fontWeight:'bold'}}>
            {cart.length}
        </Text>
        </View>
      </View>
          </View>

    <ScrollView>
      {products.map(product=>{
        return(
      
          <View key={product.key}  style={{height:260,width:"90%", borderRadius:10,marginLeft:20, 
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
             <Image  style={{backgroundColor:"#000",height:120,width:"90%"}} source={{url:"https://raw.githubusercontent.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/motorola-charm-with-motoblur.1.jpg"}}  />
          </View>

          <View style={{flexDirection:'column',flex:2}}>
             
            <Text style={{fontSize:20,fontWeight:'bold'}}>
                 {product.name}
            </Text>
            <Text style={{fontSize:21,color:"red",fontWeight:'bold',marginLeft:80}}>
               ${product.price}
            </Text>
             </View>
         <View style={{flex:5,marginRight:-26,marginBottom:-30,marginTop:20}}>
           <View  style={{backgroundColor:"blue",borderRadius:10}}>
            <Button title="Add to Cart"  onPress={()=>addProductToCart(products)}    color="white" />
           </View>
        </View>
         </View>
         
        )
      })}
    
   
      </ScrollView>

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
