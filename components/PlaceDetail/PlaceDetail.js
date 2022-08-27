import React from "react";
import {View, Modal, Image, Text, Button} from 'react-native';

const PlaceDetail = props => {
    return(
        <Modal>
            <View>
                <Image source={props.place.image} style={{width:"100%",
                height: "90%"}}/>
                <Text>{props.place.value}</Text>
                <View>
                    <Button title="Delete" color="red"/>
                </View>
            </View>
        </Modal>
    )
}

export default PlaceDetail;