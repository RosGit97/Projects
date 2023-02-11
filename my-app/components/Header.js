import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';

export default function Header() {
  const image = require("../assets/icons/back.png");
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} >
      <ImageBackground source={image} resizeMode='cover' style={styles.img}/>
      </TouchableOpacity>
      <Text style={styles.texto}>DIKULO</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000CD',
    alignItems: 'center',
    // justifyContent: 'center',
    maxHeight: 60,
    width:'100%',
    
  }, 
  texto: {
    fontFamily: 'Cochin',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    width: '80%',
  },
  button: {
    alignItems: 'center',
    padding: 8,
    width: 40,
    height: 30,
    width: '10%',
  },
  img: {
    
    width: 40,
    height: 30,
  },
  
});
