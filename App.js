import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,FlatList } from 'react-native';
import ListItem from './components/ListItem/ListItem';



export default function App() {
  const {container, colors,inputView} = styles;
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  return (
    <View style={container}>
      <View style={inputView}>
        <TextInput
        style={{width:"80%", borderBottomWidth:1,borderColor:"green",padding:7}}
        placeholder="Add a place."
        value={inputValue}
        onChangeText={text =>setInputValue(text)}/>
        

        <Button 
        title= "Add"
        onPress={() =>{
          if(inputValue!==""){
          setPlaceList([...placeList,{key:Math.random().toString(), value:inputValue}])
          }
        }} />
        
        
      </View>
        
      <FlatList style={{
        width:"100%"
      }}
      data = {placeList}
      renderItem={info =>{
        return(
          <ListItem placeName={info.item.value} onItemPressed={() => alert(item)}/>
        )
      }}
      />
      
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
  inputView:{
    padding:20,
    margin:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  }

});
