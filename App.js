import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [number1, onChangeNumber1] = useState([0]);
  const [number2, onChangeNumber2] = useState([0]);
  const [message, setMessage] = useState("");


  function compareNumbers() {
    
    if (Number(number1) < 2 || Number(number2) < 2) {
      return 'Invalid input, please try again.';
    }
    else if (Number(number1) > 100 || Number(number2) > 100) {
      return 'Invalid input, please try again.';
    }
    else if (Number(number1) > Number(number2)) {
      return 'Number 1 is greater than Number 2.';
    }
    else if (Number(number1) < Number(number2)) {
      return 'Number 1 is less than Number 2.';

    }
    else if (Number(number1) === Number(number2)) {
      return 'Number 1 is equal to Number 2.';
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.h1}>Midterm Exam</Text>
        <Text style={styles.h2}>Compare two numbers</Text>
      </View>

      <View style={styles.inputArea}>
        <View style={styles.inputArea}>
          <Text>Number 1:</Text>
          <TextInput style={styles.txtInput} onChangeText={onChangeNumber1} value={number1} keyboardType={"numeric"}/>
        </View>

        <View style={styles.inputArea}>
          <Text>Number 2:</Text>
          <TextInput style={styles.txtInput} onChangeText={onChangeNumber2} value={number2} keyboardType={"numeric"}/>
        </View>

        <View style={styles.inputArea}>
          <Button title="Compare" onPress={() => setMessage(compareNumbers())} keyboardType={"numeric"} />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  heading: {
    backgroundColor: '#01A9DB',
    padding: 50,
    borderRadius:5,
    width: '95%',
    textAlign: 'center',
  }
  ,h1: {
    fontSize:40,
    color: 'white'
  }
  ,h2: {
    fontSize:15,
    color: 'white',
    textAlign: 'center'
  }
  ,txtInput: {
    height: 50,
    borderStyle:"solid",
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    borderColor: 'lightgray', 
    borderWidth: 1,
  }

  ,inputArea : {
    width: '95%',
    marginTop: 15,
    justifyContent:'space-between',
  }

  ,message: {

  }
});
