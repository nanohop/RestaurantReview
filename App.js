import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation'

import RestaurantList from 'components/RestaurantList'

import RestaurantInfo from 'components/RestaurantInfo'

export default createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
})


