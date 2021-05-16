import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    area:{
        flex:1,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:8
    },
    botao:{
        textAlign:'center',
        fontSize: 20,
        width:69,
        height:69,
        padding: 20,
        alignItems:'center',
        borderWidth:0.5,
        justifyContent:'center',
        borderColor:'#000',
        backgroundColor:'#454545',
        borderRadius: 40,
        color:'#C0C0C0'
    },
    view:{
        margin:18,
        flexWrap:'wrap',
        flexDirection:'row'
    },
    display:{
        flex:1,
        padding:15,
        justifyContent:'center',
        backgroundColor:'#000',
        alignItems:'flex-end',
        width: Dimensions.get('window').width
    },
    displayValue:{
        fontSize:40,
        color:'#fff',
        marginRight:30
    },  
    botaoG:{
        width: 222,
        backgroundColor:'#808080'
    },  
    botaoM:{
        width: 146,
        backgroundColor:'#808080'
    },
    oper:{
        backgroundColor:'#000080',
        color:'#FFF'
    },
    touch:{
        margin:4,
    }
})