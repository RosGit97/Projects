import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function Footer({ navigation }) {
    const home = require("../assets/icons/home.png");
    const complaint = require("../assets/icons/complaint.png");
    const history = require("../assets/icons/history.png");
    const about = require("../assets/icons/about.png");

    return (
        <View style={styles.containerFooter}>

            <View style={styles.buttonFooter1}>
                <TouchableOpacity
                    style={styles.buttonFooter} onPress={() => navigation.navigate('Login')}>
                    <ImageBackground source={home} resizeMode='cover' style={styles.imgFooter} />

                </TouchableOpacity>
                <Text style={styles.textoFooter}>home</Text>
            </View>

            <View style={styles.buttonFooter1}>
                <TouchableOpacity style={styles.buttonFooter} >
                    <ImageBackground source={complaint} resizeMode='cover' style={styles.imgFooter} />
                </TouchableOpacity>
                <Text style={styles.textoFooter}>denuncias</Text>
            </View>

            <View style={styles.buttonFooter1}>
                <TouchableOpacity
                    style={styles.buttonFooter}            >
                    <ImageBackground source={history} resizeMode='cover' style={styles.imgFooter} />
                </TouchableOpacity>

                <Text style={styles.textoFooter}>historico</Text>
            </View>
            <View style={styles.buttonFooter1}>
                <TouchableOpacity style={styles.buttonFooter} >
                    <ImageBackground source={about} resizeMode='cover' style={styles.imgFooter} />
                </TouchableOpacity>
                <Text style={styles.textoFooter}>info</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerFooter: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#0000CD',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 60,
        width: '96%',
        marginTop: 15,
        marginLeft: '2%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,

    },
    buttonFooter: {
        marginHorizontal: 20,
        width: 40,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonFooter1: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    imgFooter: {

        width: 40,
        height: 40,
    },
    textoFooter: {
        fontFamily: 'Cochin',
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
        width: '80%',
    },
});

