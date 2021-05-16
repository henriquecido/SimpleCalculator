import React from 'react';
import {Text, View} from 'react-native';
import Estilo from '../Style';

export default props => {
    return(
        <View style={Estilo.display}>
            <Text style={Estilo.displayValue}>{props.value}</Text>
        </View>
    )
}