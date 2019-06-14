import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native'
import React, { Component } from 'react';
import Input from '../../helper/forms/input';
import validation from '../../helper/forms/validation'

class userForm extends Component {

    state = {
        type: 'Login',
        action: 'Login',
        actionMode: 'Register',
        hasErrors: false,
        form: {
            email: {
                userInput: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                userInput: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                userInput: '',
                valid: false,
                type: 'textinput',
                rules: {
                    confirmPass: 'password'
                }
            }
        }
    }
    changeFormType = () => {
        const type = this.state.type
        const isLogin = type === 'Login'

        this.setState({
            type: isLogin ? 'Register' : 'Login',
            action: isLogin ? 'Register' : 'Login',
            actionMode: isLogin ? 'I want to Login' : 'Register'
        })
    }

    updateInput = (name, userInput) => {
        this.setState({
            hasErrors: false
        })

        const formCopy = this.state.form
        formCopy[name].userInput = userInput

        //rules
        const rules = formCopy[name].rules
        const isValid = validation(userInput, rules, formCopy)

        formCopy[name].valid = isValid

        this.setState({
            form: formCopy
        })
    }

    confirmPassword = () => (
        this.state.type != 'Login' ?
            <Input
                type={this.state.form.password.type}
                value={this.state.form.password.userInput}
                placeholder='Confirm your password'
                onChangeText={userInput => this.updateInput("password", userInput)}
                secureTextEntry
            />
            : null
    )

    formHasError = () => (
        this.state.hasErrors ?
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
                    value={this.state.form.email.userInput}
                    autoCorrect={false}
                    keyboardType={'email-address'}
                    returnKeyType="next"
                    placeholder='Enter your email'
                    onChangeText={ value => this.updateInput ("email", value)}
                    />
                    

                <Input
                    type={this.state.form.password.type}
                    value={this.state.form.password.userInput}
                    placeholder='Enter your password'
                    onChangeText={value => this.updateInput("password", value)}
                    secureTextEntry
                />

                {this.confirmPassword()}
                {this.formHasError()}

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>{this.state.action}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={this.changeFormType}>
                        <Text
                        style={styles.buttonText}>
                            {this.state.actionMode}
                        </Text>
                </TouchableOpacity> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
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