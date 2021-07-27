import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMap extends React.Component{

  constructor() {
    super();
    this.state = {
      latitude:"",
      longitude:""
    };
  }

  render(){
  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    
    <WebView 
    scalesPageToFit={true} 
    source={{uri:"https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"}}
    style={{marginTop:20,marginBottom:20}}>  

    </WebView>
<TextInput
style={{height:40,borderColor:'gray',borderWidth:1}}
placeholder="Enter your Latitude"
placeholderTextColor="#ffff#000000"
onChangeText={(text)=>{
  this.setState({
    latitude:text
  })
}}
>

</TextInput>
<TextInput
style={{height:40,borderColor:'gray',borderWidth:1}}
placeholder="Enter your Longitude"
placeholderTextColor="#ffff#000000"
onChangeText={(text)=>{
  this.setState({
    longitude:text
  })
}}
>

</TextInput>
    </View>
  )
  }
}
const {longitude,latitude}=this.state
const path= 'https://virtualsky.lco.global/embed/index.html?longitude={longitude}&latitude={latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
