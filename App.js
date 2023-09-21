import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AddNote from './screens/AddNote';
import AllNotesScreen from './screens/AllNotesScreen';
import { useState } from 'react';
import { ScreenType } from './constant/constants';
import BackButton from './components/BackButton';

export default function App() {
  const [screen,setScreen] = useState(ScreenType.home);
  const [notes, setNotes] = useState([]);
  const updateScreen = (data) =>{
    setScreen(data);
  }
  let content;
  if(screen===ScreenType.addNote){
    content = <AddNote 
    onExit={updateScreen}
    onSave={(data) => setNotes([...notes,{id:Date.now(), note:data}])}/>
  } else if(screen===ScreenType.allNotes){
    content = <AllNotesScreen notes={notes}/>
  } else if(screen===ScreenType.home){
   content= (
   <HomeScreen 
     onExit={updateScreen}
    />
    );
  }
  console.log(notes);
  return (
    <View style={styles.container}>
    <Header/>
    { screen!==ScreenType.home && ( <BackButton onButtonClick={updateScreen}/>)}
   {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
