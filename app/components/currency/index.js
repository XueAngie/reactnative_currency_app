import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../../assets/images/Logo.png'

class CurrencyComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        source={Logo}
                        style={styles.image}
                        resizeMode={'contain'} />
                </View>
                <Text> THis is the Currency </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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