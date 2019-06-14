import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { Logo } from './Logo'
import  { InputWithButton } from './TextInput'
import { ClearButton } from  './Button'

const TEMP_BASE_CURRENCY = 'AUD';
const TEMP_QUOTE_CURRENCY = 'USD';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '69.01';
const TEMP_CONVERSION_RATE = 0.79739;
class CurrencyComponent extends Component {
    handleChangeText = () => {
        console.log('change text');
    };

    handlePressBaseCurrency = () => {
        console.log('press base currency');
    };

    handlePressQuoteCurrency = () => {
        console.log('press quote currency');
    };

    handleSwapCurrency = () => {
        console.log('handle swap currency');
    };

    handleSwapCurrency = () => {
        console.log('handle swap currency');
    };
    render() {
        return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                    <Logo />
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText}
                    />
                    <InputWithButton
                        editable={false}
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this.handlePressQuoteCurrency}
                        value={TEMP_QUOTE_PRICE}
                        />
                        <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies" />
                </KeyboardAvoidingView>
            </View>

            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8cd1a',
        fontSize: 16,
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    image: {
        height: 200,
        position: 'absolute'
    }
});

export default CurrencyComponent;