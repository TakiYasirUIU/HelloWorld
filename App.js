import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,FlatList } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceList from './components/PlaceList/PlaceList';



export default function App() {
  const {container} = styles;
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  return (
    <View style={container}>
      <InputPlace
      inputValue={inputValue}
      setInputValue={setInputValue}
      placeList={placeList}
      setPlaceList={setPlaceList}
      />
      <PlaceList placeList={placeList}/>
      
        
     
      
      </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:'column',
  },

});
