import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Estilo from './Style';

//components
import Botao from './components/Botao';
import Display from './components/Display';

export default () => {

    const [frstNum, setfrstNum] = useState('0');
    const [scndNum, setscndNum] = useState(0);

    const [oper, setOper] = useState(0);
    const [resul, setResul] = useState(false);
    const [equal, setEqual] = useState(false);
    const [oldFrst, setOldFrst] = useState(0); 

    const valueDisplay = n => {
        if(resul != true){
            if(frstNum.includes('.') && n==='.') return;
            frstNum == 0 ? setfrstNum(n) : setfrstNum(frstNum + n);
        }else{
            setfrstNum(n)
            setResul(false)
        }
    }

    const clearDisplay = n => {
        setfrstNum(n);
    }

    const changeOper = (n,x) => {
        let aux=0;
        if(n!='='){
            setscndNum(parseFloat(frstNum));
            setOper(x);
            setfrstNum('0');
            setEqual(false);
        }else{
            setResul(true)
            switch(oper){
                case 1:
                    if(equal!=true){
                        aux = scndNum+ parseFloat(frstNum);
                        setOldFrst(parseFloat(frstNum));
                        setfrstNum(aux.toString());
                        setEqual(true);
                    }else{
                        aux = parseFloat(frstNum) + oldFrst;
                        setfrstNum(aux.toString());
                    }
                    break;
                case 2:
                    if(equal!=true){
                        aux = scndNum - parseFloat(frstNum);
                        setOldFrst(parseFloat(frstNum));
                        setfrstNum(aux.toString());
                        setEqual(true);
                    }else{
                        aux = parseFloat(frstNum) - oldFrst;
                        setfrstNum(aux.toString());
                    }
                    break;
                case 3:
                    if(equal!=true){
                        aux = scndNum * parseFloat(frstNum);
                        setOldFrst(parseFloat(frstNum));
                        setfrstNum(aux.toString());
                        setEqual(true);
                    }else{
                        aux = parseFloat(frstNum) * oldFrst;
                        setfrstNum(aux.toString());
                    }
                    break;
                case 4:
                    if(equal!=true){
                        aux = scndNum / parseFloat(frstNum);
                        setOldFrst(parseFloat(frstNum));
                        setfrstNum(aux.toString());
                        setEqual(true);
                    }else{
                        aux = parseFloat(frstNum) / oldFrst;
                        setfrstNum(aux.toString());
                    }
                    break;
            }
        }
    }
    
    return(
        <SafeAreaView style={Estilo.area}>
            <Display value={frstNum}/>
            <View style={Estilo.view}>
                <Botao char='AC' botaoG onPress={() => clearDisplay('0')} />
                <Botao char='/' oper onPress={() => changeOper('/',4)}/>
                <Botao char='7' onPress={() => valueDisplay('7')}/>
                <Botao char='8' onPress={() => valueDisplay('8')}/>
                <Botao char='9' onPress={() => valueDisplay('9')}/>
                <Botao char='x' oper onPress={() => changeOper('x',3)}/>
                <Botao char='4' onPress={() => valueDisplay('4')}/>
                <Botao char='5' onPress={() => valueDisplay('5')}/>
                <Botao char='6' onPress={() => valueDisplay('6')}/>
                <Botao char='-' oper onPress={() => changeOper('-',2)}/>
                <Botao char='1' onPress={() => valueDisplay('1')}/>
                <Botao char='2' onPress={() => valueDisplay('2')}/>
                <Botao char='3' onPress={() => valueDisplay('3')}/>
                <Botao char='+' oper onPress={() => changeOper('+',1)}/>
                <Botao char='0' botaoM onPress={() => valueDisplay('0')}/>
                <Botao char='.' onPress={() => valueDisplay('.')}/>
                <Botao char='=' oper onPress={() => changeOper('=',0)}/>
            </View>
        </SafeAreaView>
    )
}