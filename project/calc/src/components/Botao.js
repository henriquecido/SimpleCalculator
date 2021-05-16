import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Estilo from '../Style';

export default props => {
    const tipo = [Estilo.botao];
    if(props.botaoG) tipo.push(Estilo.botaoG);
    if(props.botaoM) tipo.push(Estilo.botaoM);
    if(props.oper) tipo.push(Estilo.oper);

    return(
        <TouchableOpacity style={Estilo.touch} onPress={props.onPress}>
                <Text style={tipo}>{props.char}</Text>
        </TouchableOpacity>
    )
}