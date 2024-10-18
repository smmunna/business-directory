import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [name, setName] = useState('')
  const getdata = async() =>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const result = await fetch(url)
    const res =await result.json()
    setName(res)
  }
  
  useEffect(()=>{
    getdata()
  },[])
  return (
    <ScrollView>
      <Text>Profile</Text>
      <FlatList data={name} 
      renderItem={({item}) =><View style={{margin:10}}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
      </View>}
      />
    </ScrollView>
  )
}

export default Profile