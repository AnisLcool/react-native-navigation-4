import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import styles from './inputStyles';
// props => {children: ....., }
const Input = ({ handlerFunction, val, children, errorMsg, placeHolder, isPassword }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    // 1ere solution : 
    // let passwordIcone;
    // if(isPassword){
    //     if(isPasswordShown){
    //         passwordIcone = <FontAwesome name='eye-slash' size={24} color='orange' />
    //     }else{
    //         passwordIcone =  <FontAwesome name='eye' size={24} color='green' />
    //     }
    // }else{
    //     passwordIcone =  null;
    // }
    return (
        <>
            <View style={styles.container}>
                {/* l'icone */}
                <View>{children}</View>
                {/* l'input */}
                <TextInput secureTextEntry={isPassword ? isPasswordShown ? false : true : null} onChangeText={handlerFunction} value={val} style={styles.input} placeholder={placeHolder} />
                {/* 1ere solution */}
                {/* {passwordIcone} */}


                {/* 2eme solution */}
                {isPassword ?
                    <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>
                        {isPasswordShown ?
                            <FontAwesome name='eye-slash' size={24} color='orange' /> :
                            <FontAwesome name='eye' size={24} color='green' />}
                    </TouchableOpacity>
                    : null}

            </View>
            {/* {condition && qlq chose à retourné} */}
            {errorMsg && <Text>{errorMsg}</Text>}
            {/* {errorMsg ? <Text>{errorMsg}</Text> : null} */}
        </>
    )
}

export default Input;

