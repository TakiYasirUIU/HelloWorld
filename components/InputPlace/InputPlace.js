import React from 'react';
import { View,TextInput,Button,StyleSheet } from 'react-native';

const InputPlace = props => {
    const {inputView} = styles;
    return (
        <View>
            <View style={inputView}>
                <TextInput
                    style={{ width: "80%", borderBottomWidth: 1, borderColor: "green", padding: 7 }}
                    placeholder="Add a place."
                    value={props.inputValue}
                    onChangeText={text => props.setInputValue(text)} 
                    />


                <Button
                    title="Add"
                    onPress={() => {
                        if (props.inputValue !== "") {
                            props.setPlaceList([...props.placeList, { key: Math.random().toString(), value: props.inputValue }])
                        }
                    }} />


            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    inputView:{
      padding:20,
      margin:50,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  
    }
  
  });

export default InputPlace;