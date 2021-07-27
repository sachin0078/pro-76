import * as React from 'react';
import { Text, View, StyleSheet, Alert, SafeAreaView, ImageBackground, TouchableOpacity, Linking, FlatList } from 'react-native';
import axios from 'axios';

export default class SpaceCraft extends React.Component{

  constructor() {
    super();
    this.state = {
     spcCrafts:{}
    };
  }

getData=()=>{
  axios
  .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
  .then((response)=>{
      this.setState({spcCrafts:response.data})
      console.log(response.data.results)
  })
  .catch(error=>{
     console.log(error.message)
  })
}

renderItem=({item})=>{
  return(
    <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}>
      <Image
      source={{uri:item.agency.image_url}} 
      style={{
        width:"100",height:200,marginTop:15,marginBottom:15,marginRight:10
      }}></Image>
      <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
      <Text style={{color:'#696969'}}>{item.agency.name}</Text>
      <Text>DESCRIPRION</Text>
      <Text style={{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>
    </View>
  )
}

keyExtractor = (item, index) => index.toString();

  render(){
  return(
    <View style={styles.container}>
    <View style={{flex:0.25}}>
      <Text>SpaceCrafts</Text>
    </View>
    <View style={{flex:0.75}}>
      <FlatList
        KeyExtractor={this.keyExtractor}
        data={this.state.spcCrafts}
        renderItem={this.renderItem}
        >
      </FlatList>
    </View>
    </View>
  )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center",
  },
  droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white"
},
routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30
},
listContainer: {
  backgroundColor: 'rgba(52, 52, 52, 0.5)',
  justifyContent: 'center',
  marginLeft: 10,
  marginRight: 10,
  marginTop: 5,
  borderRadius: 10,
  padding: 10,
},
gifContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
},
explanationText:{
  fontSize: 25,
  fontWeight: "bold",
  color: "white",
  marginTop: 75,
  paddingLeft: 30
}
})
