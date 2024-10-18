import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
  const [value, setValue] = useState("default")
  const [name, setName] = useState("")
  const setData = async()=>{
    await AsyncStorage.setItem('name','Sm Munna')
  }
  const getData = async()=>{
   const name = await AsyncStorage.getItem('name')
   setName(name)
  }
  const deleteData = async()=>{
   await AsyncStorage.removeItem('name')
   setName('')
  }
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
        <Button title='set data' onPress={setData}/>
      </View>
      <View style={{margin:10}}>
        <Button title='Get Data' color={'blue'} onPress={getData}/>
      </View>
      <View style={{margin:10}}>
        <Button title='Delete Data' color={'red'} onPress={deleteData}/>
      </View>
      <Text>
        LocalStorage Value: {name}
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