import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,ScrollView } from 'react-native';
import ListItem from './components/ListItem/ListItem';
import { FlatList } from 'react-native-web';


export default function App() {
  const {container, colors,inputView} = styles;
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  const list = placeList.map((item, i) => {
    return(
      <ListItem placeName={item} key={i} onItemPressed={() => alert(item)}></ListItem>
    )
  })
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
          setPlaceList([...placeList,inputValue])
          }
        }} />
        
        
      </View>
        
      <ScrollView
      style={{width: "100%"}}
      >
        {list}
      </ScrollView>
      
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
