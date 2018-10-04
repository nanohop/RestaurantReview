import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native'

import Header from 'components/Header'

import RestaurantRow from 'components/RestaurantRow'

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere St'},
  {name: 'Fancy Restaurant', address: '799 Main St'},
  {name: 'Taco Place', address: '550 Maple Rd'},
  {name: "Tony's Diner", address: '4101 College St'},
  {name: 'Pasta Central', address: '706 Harper St'},
  {name: 'Burger Builder', address: '4869 Hamilton Dr'},
  {name: 'Pizza Express', address: '1049 Bird St'},
  {name: 'Teriyaki To Go', address: '1885 Tea Berry Lane'},
  {name: 'Maroon Deli', address: '1082 Stuart St'},
  {name: 'Prime Bar and Grill', address: '1848 Fairfax Dr'},
  {name: 'Dumpling House', address: '747 Kelly Dr'},
  {name: 'Hot Chicken', address: '1816 Olive St'},
  {name: "Luna's Tap Room", address: '3256 Spirit Dr'},
  {name: 'Quick Sandwich Shop', address: '2587 Cherry Ridge Dr'},
  {name: "Bobby's Burgers", address: '4152 Berkley St'},
  {name: 'Turnpike Diner', address: '4571 Central Ave'},
  {name: 'Bombay Express', address: '65 Queens Lane'},
  {name: 'Coffee Central', address: '3228 Oakwood Circle'},
  {name: "King's Garden", address: '2935 Victoria Ct'},
  {name: 'Salads and More', address: '2454 Preston St'},
]

export default class App extends Component {

  state = {
    search: null
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
            restaurants.filter(place => {
              return !this.state.search ||
                place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem={({ item, index }) => 
            <RestaurantRow place={item} index={index} />
          }
          keyExtractor={item => item.name}
          initialNumToRender={16}
          ListHeaderComponent={<View style={{height: 30}} />}
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
