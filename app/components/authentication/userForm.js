import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native'
import React, { Component } from 'react';
import Input from '../../helper/forms/input';

class userForm extends Component {

    state = {
        type: 'Login',
        action: 'Login',
        actionMode: 'Register',
        hasErrors: false,
        form: {
            email: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    confirmPass: 'password'
                }
            }
        }
    }

    updateInput = (name, value) => {
        this.setState({
            hasErrors: false
        })

        const formCopy = this.state.form
        formCopy[name].value = value

        //rules
        // const rules = formCopy[name].rules
        // const isValid = ValidateRules(value, rules, formCopy)

        // formCopy[name].valid = isValid

        this.setState({
            form: formCopy
        })
    }

    confirmPassword = () => (
        this.state.type != 'Login' ?
            <Input
                type={this.state.form.password.type}
                value={this.state.form.password.value}
                placeholder='Confirm your password'
                onChangeText={value => this.updateInput("password", value)}
                secureTextEntry
            />
            : null
    )

    formHasError = () => (
        this.state.hasErrors = true ?
        <View style={styles.errorContainer}>
            <Text style={styles.errorLabel}>Error, check your details</Text>
        </View>
        : null
    )
    
    render(){
        return(
            <View style={styles.container}>
                <Input
                    autoCapitalize="none"
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    autoCorrect={false}
                    keyboardType={'email-address'}
                    returnKeyType="next"
                    placeholder='Enter your email'
                    onChangeText={ value => this.updateInput ("email", value)}
                    />
                    

                <Input
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    placeholder='Enter your password'
                    onChangeText={value => this.updateInput("password", value)}
                    secureTextEntry
                />

                {this.confirmPassword()}

                {this.formHasError()}

                <TouchableOpacity 
                    style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonContainer}>
                        <Text
                        style={styles.buttonText}>
                            Sign Up
                        </Text>
                </TouchableOpacity> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex:1,
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
    },
    errorContainer: {
        marginBottom:10,
        marginTop:30,
        padding:10,
        backgroundColor:'#f44336'
    },
    errorLabel:{
        color:'#fff',
        textAlignVertical:'center',
        textAlign:'center'
    }
})


export default userForm;