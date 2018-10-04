import React, {Component} from 'react';

import {
  View,
  Text
} from 'react-native'

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'}
]

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Text style={{
          padding: 40,
          fontSize: 30,
          textAlign: 'center',
          color: '#0066CC',
          fontWeight: '300'
        }}>Restaurant Review</Text>

        {
          restaurants.map((place, index) => {
            return (
              <View key={place.name} style={{
                flexDirection: 'row'
              }}>
                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={{
                  flexDirection: 'column',
                  flex: 8
                }}>
                  <Text>{place.name}</Text>
                  <Text style={{color: 'grey'}}>{place.address}</Text>
                </View>

                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text>Info</Text>
                </View>
              </View>
            )
          })
        }

      </View>
    );
  }
}
