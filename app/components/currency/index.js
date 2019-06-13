import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CurrencyComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> THis is the Currency </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default CurrencyComponent;