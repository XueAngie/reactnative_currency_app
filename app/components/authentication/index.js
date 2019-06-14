import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, KeyboardAvoidingView } from 'react-native';
import Logo from '../../assets/images/Logo.png';
import UserForm from './userForm';

class AuthComponent extends Component {

    state = {
        isLoading:false
    }

    render() {
            if(this.state.isLoading){
                return(
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#CCCC00" />
                    </View>
                )
            } else {
                return(

                    <KeyboardAvoidingView behavior="padding"  style={styles.container}>
                        <View style={styles.imgContainer}>
                            <Image
                                source={Logo}
                                style={styles.image}
                                resizeMode={'contain'} />
                        </View>
                        <UserForm />
                        
                    </KeyboardAvoidingView>
                )
            }
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imgContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    image: {
        height: 200,
        position:'absolute'
    },
    loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    }
});

export default AuthComponent;