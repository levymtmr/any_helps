import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


const AppStack = createStackNavigator();

import Login from './pages/login';
import Incidents from './pages/incidents';
import Details from './pages/details';
import RegisterForm from './pages/register-form';
import UserDetail from './pages/user-detail';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='login' component={Login}/>
                <AppStack.Screen name="incidents" component={Incidents}/>
                <AppStack.Screen name="detail" component={Details}/>
                <AppStack.Screen name="form-register" component={RegisterForm}/>
                <AppStack.Screen name="user-detail" component={UserDetail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}