import { StyleSheet, Button, Text, View } from 'react-native';
import {useState} from 'react'


export default function App() {
  let [verite, setVerite] = useState(false)
  let [minute, setMinute] = useState(25)
  
  const update = () =>{
    let trustMinute = Math.floor(minute)
    let totalSecond = trustMinute*60 
    totalSecond--
    setMinute(totalSecond/60)  
  }

  let interval = setInterval(update, 1000)
  if(verite === true){
    interval
    console.log(minute)
  }else{
    clearInterval(interval)
  }

  return (
    <View  style={styles.container}>
      <Text style={styles.title}>This is your new pomodoro</Text>
      <Button title='On' onPress={()=>setVerite(true)} />
      <Button  title='Off' onPress={()=>setVerite(false)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign:'center',
    position: 'relative',
    top:"45%"
  },

  title:{
    textAlign:'center',
    marginBottom:'10%'
  }
});
