import  React,{Component} from 'react';
import { View, StyleSheet } from 'react-native';
import DrawerNavigator  from '../navigation/AppNavigator'
import MenuButton from '../components/Menubar'


class Menu extends Component {
  render(){
  return (
    <View  style={styles.container}>
      <MenuButton navigation={this.props.navigation}/>
        <DrawerNavigator/>
    </View>
  );
}
}

const styles=StyleSheet.create({
      container:{
        flex: 1, 
        

      }
})




export default Menu;