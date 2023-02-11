import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native';
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import * as ImagePicker from "react-native-image-picker";
import { SelectList } from 'react-native-dropdown-select-list'
import Footer from './Footer';
export default function Denuncia({ navigation }) {
    const fundo = require("../assets/images/fundo2.jpg");
    const enter = require("../assets/icons/enter.png");
    const home = require("../assets/icons/home.png");
    const complaint = require("../assets/icons/complaint.png");
    const history = require("../assets/icons/history.png");
    const about = require("../assets/icons/about.png");
    const user = require("../assets/icons/user.png");
    const picture = require("../assets/icons/pictures.png");
    const [tipoCrime, setTipoCrime] = useState(undefined);
    const [municipio, setMunicipio] = useState(undefined);
    const dataM = [

        { label: 'Bengo', value: 'Bengo' },
        { label: 'Luanda', value: 'Luanda' },
        { label: 'Talatona', value: 'Talatona' },
        { label: 'Belas', value: 'Belas' },
        { label: 'Maianga', value: 'Maianga' },
        { label: 'Viana', value: 'Viana' },
    ];
    const data = [

        { label: 'estupro', value: 'estupro' },
        { label: 'assalto', value: 'assalto' },
        { label: 'homicidio', value: 'homicidio' },
        { label: 'violenciaDomestica', value: 'Violencia domestica' },
        { label: 'crimesContraCrianca', value: 'crimes contra a criança' },
    ];

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // const handleImage = () => {
    //     Alert.alert(
    //         "Selecione",
    //         "De onde pretende pegar a imagem",
    //         [
    //             {
    //                 text: "Galeria",
    //                 onPress: () => pickImageFromGalery(),
    //                 style: "default"
    //             },
    //             {
    //                 text: "Camera",
    //                 onPress: () => pickImageFromCamera(),
    //                 style: "default"
    //             }
    //         ]
    //     )
    // }

    // const pickImageFromGalery = async() => {

    //     const options: ImageLibraryOptions =  {
    //         mediaType: 'photo'
    //     }

    //     const result = await launchImageLibrary(options);
    // }

    return (
        <View style={styles.container}>
            <ImageBackground source={fundo} resizeMode='cover' style={styles.img} >
                <View style={styles.containerSAV1}>
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
                        marginBottom: 30,
                    }}>
                        <Text style={{
                            fontFamily: 'Cochin',
                            fontSize: 30,
                            padding: 0,
                            margin: 0,
                            color: '#DCDCDC',
                        }}>Denuncias</Text>
                    </View>
                </View>
                <ScrollView style={styles.body}>

                    <SafeAreaView style={styles.containerSAV}>


                        <View style={styles.containerSAV1}>

                            <SelectList placeholder="Classificação do crime" data={data} setSelected={setTipoCrime}
                                boxStyles={[styles.input, {
                                    borderStartWidth: 0,
                                    borderRadius: 'none',
                                    height: 50,
                                    alignItems: 'center',

                                }]}

                            />
                            <SelectList placeholder="Local do crime" data={dataM} setSelected={setTipoCrime}
                                boxStyles={[styles.input2, {
                                    borderStartWidth: 0,
                                    borderRadius: 'none',
                                    height: 50,
                                    alignItems: 'center',


                                }]}

                            />

                            <TextInput
                                style={styles.input2}
                                placeholder="bi"
                                placeholderTextColor="#fff"
                            ></TextInput>
                            <TextInput
                                style={styles.input2}
                                placeholder="vitimas mortais"
                                placeholderTextColor="#fff"
                                keyboardType="numeric"
                            ></TextInput>
                            <TextInput
                                style={styles.input2}
                                placeholder="descreva o que aconteceu"
                                placeholderTextColor="#fff"
                            ></TextInput>
                            <TouchableOpacity
                                onPress={pickImage}

                                style={[styles.input3, { flex: 1, flexDirection: 'row', alignItems: 'center', }]} >
                                <ImageBackground source={picture} resizeMode='cover' style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', }} />
                                <Text style={{ color: '#fff' }}>adicionar anexos</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonS} >
                                {/* <ImageBackground source={enter} resizeMode='cover' style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', }} /> */}
                                <Text>Submeter</Text>
                            </TouchableOpacity>
                            <ImageBackground source={{ uri: image }} resizeMode='cover' style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', }} />

                        </View>


                    </SafeAreaView>


                </ScrollView>

                <View style={styles.containerFooter}>

                    <View style={styles.buttonFooter1}>
                        <TouchableOpacity
                            style={styles.buttonFooter} >
                            <ImageBackground source={home} resizeMode='cover' style={styles.imgFooter} />

                        </TouchableOpacity>
                        <Text style={styles.textoFooter}>home</Text>
                    </View>

                    <View style={[styles.buttonFooter1,{borderBottomWidth: 3, borderBottomColor: '#A9A9A9',borderBottomEndRadius: 10,borderBottomStartRadius: 10,}]}>
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

        // flex: 1,


    },
    containerSAV1: {

        width: '100%',
        top: 0,
    },

    body: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        // backgroundColor: 'red',
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
    buttonS: {
        marginLeft: '8%',
        marginTop: 5,
        height: 50,
        width: 190,
        borderWidth: 1,
        borderBottomWidth: 10,
        borderTopWidth: 3,
        borderEndWidth: 3,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,

        borderColor: '#DCDCDC',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

