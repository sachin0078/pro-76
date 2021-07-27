import * as React from 'react';
import { Text, View, StyleSheet, Alert, SafeAreaView, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component{

  constructor() {
    super();
    this.state = {
     pics:{}
    };
  }

getPics=()=>{
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=Ur68cPcud6HpnuIwtgvGKBnykOaSk32hgQEO1knt")
  .then((response)=>{
      this.setState({pics:response.data})
  })
  .catch(error=>{
     Alert.alert(error.message)
  })
}


  render(){
  return(
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
    <ImageBackground
    source={require('../assets/stars.gif')} 
    style={styles.backgroundImage}>
      <Text style={styles.routeText}>Astrnomy Picture Of The Day</Text>
      <Text style={styles.titleText}>{this.state.pics.title}</Text>

      <TouchableOpacity style={styles.listContainer} 
      onPress={()=> Linking.openURL(this.state.pics.url).catch(err=> console.error("couldn't load page", err))}> 
      <View style={styles.gifContainer}>
        <Image source={require("../assets/play-video.png")} style={{width:50,height:50}}></Image>
      </View>
     </TouchableOpacity>
     
        <Text style={styles.explanationText}>
          {this.state.pics.explanation}
        </Text>
    
    </ImageBackground>
    </View>
  )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1
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
