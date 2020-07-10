import React from 'react';
import {Dimensions,Image,View,StyleSheet,ScrollView}  from 'react-native'


const WIDTH=Dimensions.get("window").width;

class BackgroundCarousel extends React.Component{
    scrollRef=React.createRef();
    constructor(props){
        super(props);

        this.state={
            selectedIndex:0
        }
    }

    render(){
        const {images}=this.props
        const {selectedIndex}=this.state

        return(
            <View  style={{width:"100%"}}>
                <ScrollView  horizontal pagingEnabled>
                    {images.map(image=>{
                        <Image
                         key={image}
                         source={{uri:image}}
                          style={StyleSheet.backgroundImage}
                        />
                    })}
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    backroundImage:{
        width:WIDTH,
    }
});

export default BackgroundCarousel;