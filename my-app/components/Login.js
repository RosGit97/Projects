import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import React, { useState } from "react";
import Axios from "axios";
import { SelectList } from 'react-native-dropdown-select-list'
import Footer from './Footer';
export default function Login({ navigation }) {
    const fundo = require("../assets/images/fundo2.jpg");
    const enter = require("../assets/icons/enter.png");
    const home = require("../assets/icons/home.png");
    const complaint = require("../assets/icons/complaint.png");
    const history = require("../assets/icons/history.png");
    const about = require("../assets/icons/about.png");
    const user = require("../assets/icons/user.png");


    const [values, setValues] = useState();
    const use =null;
    const [userBi, setUserBi] = useState();
    const [primeiro_nome, setPrimeiro_nome] = useState();
    const [palavra_passe, setPalavra_passe] = useState();
    const handleChangeValues = value => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };
    
    // const handleClickButton = () => {
    //     Axios.get("http://localhost:3001/login", {
    //         bi: values.bi,
    //         password: values.password,
    //     }).then((response) => {
    //         console.log(JSON.stringify(response.data));
    //         setUser(response.data);
            
    //     });
        
    // };
                
   
    const handleClickButton = () => {
        
        Axios.post("http://192.168.100.16:3001/login", {
            bi: userBi,
            password: palavra_passe,
        }).then((response) => {
            console.log(response.data);
            use=response.data;
            
            {typeof userBi !== "undefined" && userBi.map((value) =>{
                
                console.log("99");
                setPrimeiro_nome(value[0].primeiro_nome);
                // console.log("99"+);
            })}
        });
       
    };

    function double(){
        handleClickButton();
            alert("sucess");
        
       
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={fundo} resizeMode='cover' style={styles.img} >
            <View style={{
                               width: '100%',
                               height: 30,
                               alignItems: 'center',
                               justifyContent: 'center',
                               borderStartWidth: 3,
                               borderEndWidth: 3,
                               borderBottomStartRadius: 10,
                               borderBottomEndRadius: 10,
                               borderBottomWidth: 1,
                               // borderBottomColor: '#fff',
                               borderColor: '#fff',
                               marginBottom: 50,
                            }}>
                                <Text style={{
                                    fontFamily: 'Cochin',
                                    fontSize: 30,
                                    padding: 0,
                                    margin: 0,
                                    color: '#DCDCDC',
                                }}>Acesse a sua conta</Text>
                            </View>
                <View style={styles.body}>




                    <SafeAreaView style={styles.containerSAV}>


                        <View style={styles.containerSAV1}>
                            

                            <TextInput
                                style={styles.input}
                                placeholder="bilhete de identidade"
                                placeholderTextColor="#fff"
                                onChangeText={(text) => setUserBi(text)}
                            ></TextInput>
                           
                            <TextInput
                                style={styles.input3}

                                placeholder="senha"
                                placeholderTextColor="#fff"
                                onChangeText={(text) => setPalavra_passe(text)}
                            ></TextInput>

                        </View>
                        <TouchableOpacity 
                        onClick={double}
                        style={styles.button} >
                            <ImageBackground source={enter} resizeMode='cover' style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', }} />

                        </TouchableOpacity>

                    </SafeAreaView>
                   
                </View>

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

                    <View style={styles.buttonFooter1}>
                        <TouchableOpacity
                            style={styles.buttonFooter}
                            onPress={() => navigation.navigate('Historico')}
                            >
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
                    <View style={styles.buttonFooter1}>
                        <TouchableOpacity 
                        // onPress={() => navigation.navigate('Registo')}
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
        top: '6%',

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
        flexDirection: 'row',

        maxHeight: '72%',
    },
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
});

