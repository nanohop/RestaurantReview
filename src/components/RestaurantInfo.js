import React, { Component } from 'react'

import {
  View,
  Text
} from 'react-native'

export default class RestaurantInfo extends Component {

  static navigationOptions = {
    title: 'Restaurant Info'
  }

  render() {
    return (
      <View>
        <Text>Info</Text>
      </View>
    )
  }
}