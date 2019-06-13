import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingsComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> THis is the Settings </Text>
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

export default SettingsComponent;