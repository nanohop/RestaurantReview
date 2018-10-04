import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native'

import axios from 'axios'

import Header from 'components/Header'

import RestaurantRow from 'components/RestaurantRow'

export default class App extends Component {

  state = {
    search: null,
    restaurants: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/restaurants')
      .then(result => this.setState({ restaurants: result.data }))
  }

  render() {

    return (
      <View style={{
        flex: 1
      }}>

        <Header />

        <TextInput 
          style={styles.input} 
          placeholder="Live Search"
          onChangeText={text => {
            this.setState({ search: text })
          }}
          value={this.state.search}
        />

        <FlatList
          data = {
            this.state.restaurants.filter(place => {
              return !this.state.search ||
                place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem={({ item, index }) => 
            <RestaurantRow place={item} index={index} />
          }
          keyExtractor={item => item.name}
          initialNumToRender={16}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})
