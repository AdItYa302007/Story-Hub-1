  
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default class Write extends Component {
  render() {
    return (
      <View>
        <Text style={styles.head}>Story Hub</Text>
        <TextInput 
          style = {styles.inputBox}
          placeholder = "Story Title"
          placeholderTextColor = 'black'
        />
        <TextInput 
          style = {styles.inputBox}
          placeholder = "Author"
          placeholderTextColor = 'black'
        />
        <TextInput 
          style = {[styles.inputBox, {height:250}]}
          multiline = {true}
          placeholder = "Write Your Story "
          placeholderTextColor = 'black'
        />
        <TouchableOpacity style = {styles.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  head:{
    textAlign: 'center', 
    fontSize: 22, 
    backgroundColor: '#FFC0CB', 
    padding: 20,
  },
  inputBox: {
    alignSelf:'center',
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    paddingLeft:15,
    marginTop:25
  },
  submitButton:{
    alignSelf:'center',
    backgroundColor: '#FFC0CB',
    padding:10,
    marginTop:10
  }
})