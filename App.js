import 'react-native-gesture-handler';
import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './Screens/HomePage';
import MyAccountPage from './Screens/MyAccountPage';
import SettingsPage from './Screens/SettingsPage';
import LoginPage from './Screens/LoginPage';
import SignUpPage from './Screens/SignUpPage';

import BusinessPage from './Screens/BusinessPage';
import BusinessTabs from './Screens/BusinessTabs';
import OrderHistoryPage from './Screens/OrderHistoryPage';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BasketPage from './Screens/BasketPage';
import Paypal from './Screens/Paypal';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'rgba(20, 156, 12, 0.1)'},
        headerTintColor: '#149C0C',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen name="Login" component={LoginPage} />
      <HomeStack.Screen name="Signup" component={SignUpPage} />
      <HomeStack.Screen name="Home" component={HomePage} />
      <HomeStack.Screen name="Business Tabs" component={BusinessTabs} />
      <HomeStack.Screen name="Business" component={BusinessPage} />
      <HomeStack.Screen name="Basket" component={BasketPage} />
      {/* <HomeStack.Screen name="Paypal" component={Paypal} /> */}
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsPage} />
    </SettingsStack.Navigator>
  );
}

const MyAccountStack = createStackNavigator();

function MyAccountStackScreen() {
  return (
    <MyAccountStack.Navigator>
      <MyAccountStack.Screen
        name="My Account"
        component={MyAccountPage}
        options={{title: 'My Account'}}
      />
      <MyAccountStack.Screen
        name="Order History"
        component={OrderHistoryPage}
        // options={{title: 'My Account'}}
      />
    </MyAccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = 'ios-cog';
            } else if (route.name === 'My Account') {
              iconName = 'ios-contact';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#149C0C',
          inactiveTintColor: 'gray',
          style: {paddingTop: 5},
          initialRouteName: 'Login',
        }}>
        {/* <Tab.Screen
          name="Login"
          component={LoginPage}
          options={{tabBarVisible: false, title: ''}}
        /> */}

        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="My Account" component={MyAccountStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
