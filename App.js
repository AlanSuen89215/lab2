import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import React from 'react'; 

export default function App() {
  const [value, setValue] = React.useState('placeholder');

  return (
    <View style={styles.container}>
      <TextInput style={styles.edit} 
      clearTextOnFocus='true' 
      onChangeText={text => setValue(text)}></TextInput>
      <Text style={styles.textView}>{value}</Text>
      <Button title='Clear' color="#841584" onPress={() => setValue('')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  edit: {
    borderWidth: 2,
    borderColor:'red',
    color: 'blue',
    width:'90%'
  },
  textView: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: 'red',
    color: 'blue'
  }
});
