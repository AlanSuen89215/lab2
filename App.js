import { StyleSheet, Text, TextInput, Button, Switch, View } from 'react-native';
import React, {useState} from 'react'; 

export default function App() {
  const [value, setValue] = React.useState('placeholder');
  const [isEnabled, setIsEnabled] = useState(false);
  const [bgColor, setBgColor] = useState('#ffffff');
  
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (bgColor == '#ffffff') {
      setBgColor('#000000');
    }
    else {
      setBgColor('#ffffff');
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <TextInput style={styles.edit} 
      clearTextOnFocus='true' 
      onChangeText={text => setValue(text)}></TextInput>
      <Text style={styles.textView}>{value}</Text>
      <Button title='Clear' color="#841584" onPress={() => setValue('')}></Button>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
