import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Registo from './components/Registo';
import Historico from './components/Historico';
import Login from './components/Login';
import Denuncia from './components/Denuncia';
import Info from './components/Info';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  // var Dimensions = require('Dimensions')
  // var { width, height } = Dimensions.get('window')
  const Stack = createStackNavigator();
  return (

    <View style={styles.container}>
      {/* <View >
          <Header></Header>
        </View> */}
      <View style={styles.body}>
        <StatusBar style="auto" />
        

         <NavigationContainer>
           <Stack.Navigator initialRouteName="Registo">
             <Stack.Screen name="Registo" component={Registo} />
             <Stack.Screen name="Login" component={Login} />
             <Stack.Screen name="Historico" component={Historico} />
             <Stack.Screen name="Denuncia" component={Denuncia} />
             <Stack.Screen name="Info" component={Info} />
           </Stack.Navigator>
           
         </NavigationContainer>

      
      </View>


      {/* <View style={styles.footer}>
        <Footer ></Footer>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    height: '100%',

  },
  footer: {

    alignItems: 'center',
    justifyContent: 'center',
    height: '9%',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,

  },
  header: {

    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});
