import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const input = (props) => {
    let template = null

    switch (props.type) {
        case 'textinput':
            template =
                <TextInput
                    {...props}
                    style={styles.input} />
            break
        default:
            return template
    }

    return template
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(215,215,215,0.8)',
        marginBottom: 10,
        padding: 15,
        fontSize: 18,
        marginTop: 5,
    }
})


export default input