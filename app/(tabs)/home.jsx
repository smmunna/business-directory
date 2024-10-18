import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [value, setValue] = useState("default")
  return (
    <View>
      <Text style={{fontSize:'22px', fontFamily:'space-mono', textAlign:'center'}}>Making Form</Text>
      <TextInput
      style={styles.textInput}
      secureTextEntry={true}
      placeholder='Enter your name ok'
      onChangeText={(text)=>setValue(text)}
      />
      <View style={{margin:10}}>
        <Button title='Details'/>
      </View>
      <View style={{margin:10}}>
        <Button title='Reset' color={'red'}/>
      </View>
      <Text>
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput:{
    borderColor:'blue',
    borderWidth:2,
    margin:10,
    padding:10
  }
})

export default Home