import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import {Platform,Dimensions} from 'react-native';
import MyStack from '../navigation/NavigationApp';
import  {createDrawerNavigator} from 'react-navigation-drawer'
import Sidebar from '../screens/Sidebar'
import Laptop from '../screens/Description/laptops'
import Tv from '../screens/Description/tv'
import Phones from '../screens/Description/phones'
import Shoes from '../screens/Description/shoes'
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen'
import MenuDrawer from '../components/MenuDrawer'
import Payment from '../screens/Description/Payment'
import DeveloperScreen from '../screens/DeveloperScreen'

const WIDTH=Dimensions.get('window').width;

const DrawerConfig={
    drawerWidth: WIDTH*0.80,
    contentComponent:({navigation})=>{
      return(<MenuDrawer navigation={navigation}/>)

    }
} 




const DrawerNavigator=createDrawerNavigator({

    home:{ 
           screen:Sidebar
         },
    Links:{
          screen:LinksScreen
    },
    Settings:{
         screen:SettingsScreen
    },
    Developer:{
      screen:DeveloperScreen
    }
   
   
         },

    DrawerConfig


);


const Nav= createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main:Sidebar,
  menu:DrawerNavigator,
  screen:SettingsScreen,
  laptops:Laptop,
  tv:Tv,
  shoes:Shoes,
  phones:Phones,
  payment:Payment


}
)




export  default createAppContainer(Nav)





