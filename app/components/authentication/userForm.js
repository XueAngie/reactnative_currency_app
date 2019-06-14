import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native'
import React, { Component } from 'react';
import Input from '../../helper/forms/input';
import validation from '../../helper/forms/validation'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signIn, signUp } from '../../store/actions/form_actions'

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
    changeFormType = () => {
        const type = this.state.type
        const isLogin = type === 'Login'

        this.setState({
            type: isLogin ? 'Register' : 'Login',
            action: isLogin ? 'Register' : 'Login',
            actionMode: isLogin ? 'I want to Login' : 'Register'
        })
    }

    updateInput = (name, value) => {
        this.setState({
            hasErrors: false
        })

        const formCopy = this.state.form
        formCopy[name].value = value

        const rules = formCopy[name].rules
        const isValid = validation(value, rules, formCopy)

        console.log(isValid);
        formCopy[name].valid = isValid

        this.setState({
            form: formCopy
        })
    }

    getAccess = () => {
        if(!this.props.User.auth.uid){
            this.setState({hasErrors:true})
        } else {
            this.setState({hasErrors:false});
            this.props.goNext();
        }
    }

    submitUser = () => {
        let isFormValid = true
        let formToSubmit = {}
        const formCopy = this.state.form

        for (let key in formCopy) {
            if (this.state.type === 'Login') {
                //LOGIN
                if (key !== 'confirmPassword') {
                    isFormValid = isFormValid && formCopy[key].valid;
                    formToSubmit[key] = formCopy[key].value;
                }

            } else {
                // REGISTER
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value;
            }
        }

        if (isFormValid) {
            if (this.state.type === 'Login') {
                this.props.signIn(formToSubmit)
                    .then(() => {
                        this.getAccess()
                    })
                console.log(formToSubmit)
            } else {
                this.props.signUp(formToSubmit)
                    .then(() => {
                        this.getAccess()
                    })

                console.log(formToSubmit)
            }
        } else {
            this.setState({
                hasErrors: true
            })
        }
    }

    confirmPassword = () => (
        this.state.type != 'Login' ?
            <Input
                type={this.state.form.confirmPassword.type}
                value={this.state.form.confirmPassword.value}
                placeholder='Confirm your password'
                onChangeText={value => this.updateInput("confirmPassword", value)}
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
                    style={styles.buttonContainer}
                    onPress={this.submitUser}
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
        backgroundColor: '#e8cd1a',
        paddingVertical: 15,
        marginTop:5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
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


function mapStateToProps(state) {
    console.log("state: ",state)
    return {
        User: state.User
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signIn, signUp }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(userForm)