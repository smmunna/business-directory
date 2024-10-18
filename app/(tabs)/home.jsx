import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [value, setValue] = useState([])
  return (
    <View>
      <Text style={{fontSize:'22px', fontFamily:'space-mono'}}>Home</Text>
    </View>
  )
}

export default Home