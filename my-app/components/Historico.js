import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import React, { useState } from "react";


import { SelectList } from 'react-native-dropdown-select-list'
import Footer from './Footer';
export default function Historico({ navigation }) {
    const fundo = require("../assets/images/fundo2.jpg");
    const enter = require("../assets/icons/enter.png");
    const home = require("../assets/icons/home.png");
    const complaint = require("../assets/icons/complaint.png");
    const history = require("../assets/icons/history.png");
    const about = require("../assets/icons/about.png");
    const user = require("../assets/icons/user.png");



    return (
        <View style={styles.container}>
            <ImageBackground source={fundo} resizeMode='cover' style={styles.img} >

                <ScrollView style={styles.body}>

                    <View style={styles.buttonHistorico}>
                        <TouchableOpacity
                            style={styles.buttonHistorico1} >
                            <Text>home fdjfsf djkmfnjf njfnds kndfjnfms</Text>
                            <Text style={{position: 'absolute',top: 3,left: 240,}}>data:dd/mm/aa</Text>
                            <Text style={{position: 'absolute',top: 55,left: 10,}}>municipio: Luanda</Text>

                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonHistorico}>
                        <TouchableOpacity
                            style={styles.buttonHistorico1} >
                            <Text>home fdjfsf djkmfnjf njfnds kndfjnfms</Text>
                            <Text style={{position: 'absolute',top: 3,left: 240,}}>data:dd/mm/aa</Text>
                            <Text style={{position: 'absolute',top: 55,left: 10,}}>municipio: Luanda</Text>

                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonHistorico}>
                        <TouchableOpacity
                            style={styles.buttonHistorico1} >
                            <Text>home fdjfsf djkmfnjf njfnds kndfjnfms</Text>
                            <Text style={{position: 'absolute',top: 3,left: 240,}}>data:dd/mm/aa</Text>
                            <Text style={{position: 'absolute',top: 55,left: 10,}}>municipio: Luanda</Text>

                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonHistorico}>
                        <TouchableOpacity
                            style={styles.buttonHistorico1} >
                            <Text>home fdjfsf djkmfnjf njfnds kndfjnfms</Text>
                            <Text style={{position: 'absolute',top: 3,left: 240,}}>data:dd/mm/aa</Text>
                            <Text style={{position: 'absolute',top: 55,left: 10,}}>municipio: Luanda</Text>

                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonHistorico}>
                        <TouchableOpacity
                            style={styles.buttonHistorico1} >
                            <Text>home fdjfsf djkmfnjf njfnds kndfjnfms</Text>
                            <Text style={{position: 'absolute',top: 3,left: 240,}}>data:dd/mm/aa</Text>
                            <Text style={{position: 'absolute',top: 55,left: 10,}}>municipio: Luanda</Text>


                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonHistorico}>
                        <TouchableOpacity
                            style={styles.buttonHistorico1} >
                            <Text>home fdjfsf djkmfnjf njfnds kndfjnfms</Text>
                            <Text style={{position: 'absolute',top: 3,left: 240,}}>data:dd/mm/aa</Text>
                            <Text style={{position: 'absolute',top: 55,left: 10,}}>municipio: Luanda</Text>

                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonHistorico}>
                        <TouchableOpacity
                            style={styles.buttonHistorico1} >
                            <Text>home fdjfsf djkmfnjf njfnds kndfjnfms</Text>
                            <Text style={{position: 'absolute',top: 3,left: 240,}}>data:dd/mm/aa</Text>
                            <Text style={{position: 'absolute',top: 55,left: 10,}}>municipio: Luanda</Text>

                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.buttonHistorico}>
                        <TouchableOpacity
                            >
                            
                        </TouchableOpacity>
                        
                    </View>

                </ScrollView>

                <View style={styles.containerFooter}>

                    <View style={styles.buttonFooter1}>
                        <TouchableOpacity
                            style={styles.buttonFooter} >
                            <ImageBackground source={home} resizeMode='cover' style={styles.imgFooter} />

                        </TouchableOpacity>
                        <Text style={styles.textoFooter}>home</Text>
                    </View>

                    <View style={styles.buttonFooter1}>
                        <TouchableOpacity 
                        style={styles.buttonFooter} 
                        onPress={() => navigation.navigate('Denuncia')}
                        >
                            <ImageBackground source={complaint} resizeMode='cover' style={styles.imgFooter} />
                        </TouchableOpacity>
                        <Text style={styles.textoFooter}>denuncias</Text>
                    </View>

                    <View style={[styles.buttonFooter1,{borderBottomWidth: 3, borderBottomColor: '#A9A9A9',borderBottomEndRadius: 10,borderBottomStartRadius: 10,}]}>
                        <TouchableOpacity
                            style={styles.buttonFooter}
                            onPress={() => navigation.navigate('Historico')}
                        >
                            <ImageBackground source={history} resizeMode='cover' style={styles.imgFooter} />
                        </TouchableOpacity>

                        <Text style={styles.textoFooter}>historico</Text>
                    </View>
                    <View style={styles.buttonFooter1}>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('Info')}
                        style={styles.buttonFooter} >
                            <ImageBackground source={about} resizeMode='cover' style={styles.imgFooter} />
                        </TouchableOpacity>
                        <Text style={styles.textoFooter}>info</Text>
                    </View>
                    <View style={styles.buttonFooter1}>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('Registo')}
                        style={styles.buttonFooter} >
                            <ImageBackground source={user} resizeMode='cover' style={styles.imgFooter} />
                        </TouchableOpacity>
                        <Text style={styles.textoFooter}>conta</Text>
                    </View>
                </View>


            </ImageBackground>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // backgroundColor: 'blue',
        width: '100%',
        height: '100%',
    },
    img: {

        width: '100%',
        height: '100%',
    },
    input: {
        height: 50,
        width: '100%',
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderEndWidth: 1,
        borderTopEndRadius: 100,
        padding: 10,
        borderColor: '#DCDCDC',
    },
    input2: {
        height: 50,
        width: '100%',
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderEndWidth: 1,
        padding: 10,
        borderColor: '#DCDCDC',
    },
    input3: {
        height: 50,
        width: '100%',
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderEndWidth: 1,
        borderBottomEndRadius: 100,
        padding: 10,
        borderColor: '#DCDCDC',
    },
    containerSAV: {
        width: '65%',
        maxHeight: '85%',


        // position: 'absolute',
        // left: 0,
        // right: 0,
        top: '20%',
        // flex: 1,


    },
    containerSAV1: {

        width: '100%',
        top: 0,
    },
    button: {
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        position: 'absolute',
        left: '90%',
        right: 0,
        top: '35%',

    },
    Login: {
        backgroundColor: 'yellow',
        height: 80,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        // left: '65%',
        // right: 0,
        // top: 0,
        marginTop: '1%',
        borderBottomStartRadius: 50,
        borderTopStartRadius: 50,

    },

    footer: {

        alignItems: 'center',
        justifyContent: 'center',
        height: '9%',

        // position: 'absolute',
        // left: 0,
        // right: 0,
        // bottom: 20,

    },

    body: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        
    },
    containerFooter: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#0000CD',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: '96%',
        marginTop: 15,
        marginLeft: '2%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        position: 'absolute',
        top: '85%'


    },
    buttonFooter: {
        marginHorizontal: 20,
        width: 40,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonFooter1: {
        // backgroundColor: 'red',
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6,
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
    buttonHistorico: {
       
        height: 80,
        width: '94%',
        left: '3%',
        top: 20,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonHistorico1: {
        borderWidth: 2,
        borderColor: '#A9A9A9',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomEndRadius: 20,
        borderTopStartRadius: 20,
        opacity: 0.8,
    },
});

