import React from 'react'

import { View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const Stars = ({ rating }) => {
  const stars = [...Array(Math.ceil(rating))]

  return (
    <View style={{ flexDirection: 'row' }}>
      {
        stars.map((_, i) => {
          // show star-half on the last star, 
          // if the rating is not a whole number
          const name = Math.floor(rating) > i ? 'star' : 'star-half'
          return <Icon key={i} name={name} color="#FFD64C" />
        })
      }
    </View>
  )
}

export default Stars
