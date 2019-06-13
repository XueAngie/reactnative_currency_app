import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native'
import React, { Component } from 'react'

class userForm extends Component {

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email or Mobile Num' />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    secureTextEntry />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex:1,
        backgroundColor: 'rgba(225,225,25,.8)',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,1)',
        marginBottom: 10,
        padding: 15,
        fontSize: 18,
        marginTop: 5,
        color: '#fff',
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginTop:5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        
    }
})


export default userForm;