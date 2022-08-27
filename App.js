import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,FlatList } from 'react-native';
import InputPlace from './components/InputPlace/InputPlace';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';



export default function App() {
  const {container} = styles;
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null)
  const handleSelectedPlace = key => {
    const place = placeList.find(place =>{
      return place.key === key;
    })
    setSelectedPlace(place);
  }
  let placeDetail = null;
  if(selectedPlace!==null){
    placeDetail = <PlaceDetail place={selectedPlace}/>
  }
  return (
    <View style={container}>
      {/* <PlaceDetail></PlaceDetail> */}
      {placeDetail}
      <InputPlace
      inputValue={inputValue}
      setInputValue={setInputValue}
      placeList={placeList}
      setPlaceList={setPlaceList}
      />
      <PlaceList placeList={placeList} handleSelectedPlace={handleSelectedPlace}/>
      
        
     
      
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
