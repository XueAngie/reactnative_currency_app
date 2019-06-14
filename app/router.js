import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';


import LogIn from './components/authentication';
import Currency from './components/currency';
import Setting from './components/settings';

const BottomApp = createBottomTabNavigator({
    Currency:Currency,
    Setting:Setting
},{
    initialRouteName:'Currency',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let icon;
            if (routeName === 'Currency') {
                icon = 'repeat';
            } else if (routeName === 'Setting') {
                icon = 'settings';
            }

            return <MaterialIcon name={icon} size={25} color={tintColor} />;
        }
    })
})

const AuthenticationView = createStackNavigator({
    LogIn:LogIn
})

export const MainNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App:BottomApp,
        Auth:AuthenticationView
    },{
        initialRouteName:'App'
    }))
}