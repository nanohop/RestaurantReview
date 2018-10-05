import React, {Component} from 'react';

import { 
  createStackNavigator,
  createTabNavigator
} from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'
import About from 'components/About'

const List = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#0066CC',
      color: '#FFF'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      color: '#FFF'
    }    
  }
})


export default createTabNavigator({
  List: { screen: List },
  About: { screen: About }
}, {
  navigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => {
        const route = navigation.state.routeName
        const name = {
          'List': 'list',
          'About': 'info-circle'
        }[route]
        return <Icon name={name} color={tintColor} size={22} />
      }
    }
  },
  tabBarOptions: {
    activeBackgroundColor: '#E6F0FA'
  }
})

