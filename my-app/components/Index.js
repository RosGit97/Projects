import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Registo from './registo';
import Login from './Login';
import Historico from './Historico';
import Denuncia from './Denuncia';
import Info from './Info';
const MainNav = createStackNavigator(
    {
        Registo: {
            screen: Registo,
            navigationOptions: {
                header: null
            }
        },

        Login: {
            screen: Login,
            navigationOptions: {
                headerTitle: 'Login'
            }
        },

        Historico: {
            screen: Historico,
            navigationOptions: {
                headerTitle: 'Historico'
            }
        },

        Denuncia: {
            screen: Denuncia,
            navigationOptions: {
                headerTitle: 'Denuncia'
            }
        },

        Info: {
            screen: Info,
            navigationOptions: {
                headerTitle: 'Denuncia'
            }
        },
    }
)
export default createAppContainer(MainNav);