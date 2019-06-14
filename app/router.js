import React from 'react';

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
})

const AuthenticationView = createStackNavigator({
    LogIn:LogIn
})

export const MainNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App:BottomApp,
        Auth:AuthenticationView
    },{
        initialRouteName:'Auth'
    }))
}