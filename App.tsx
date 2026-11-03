import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age,setAge] = useState('')
  const ageNumber:number = parseInt(age)
  const lower:number = isNaN(ageNumber)?0:(220-ageNumber)*0.65
  const upper:number = isNaN(ageNumber)?0:(220-ageNumber)*0.85

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput style={{borderColor:"black",borderWidth:1}} value={age} onChangeText={setAge}></TextInput>
      <Text>Lower limit: {lower.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upper.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
