import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface BotaoPesquisaProps {
}

export function BotaoPesquisa (props: BotaoPesquisaProps) {
    return(
        <View style={styles.pesquisaContainer}>
            <View style={styles.pesquisa}>
                <TextInput
                    style={styles.inputPesquisa}
                    placeholder='Procure aqui...'
                />
                <MaterialIcons name="search" size={30} color="#575757"/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    pesquisa:{
        backgroundColor: '#D9D9D9',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 7,
    },
    inputPesquisa:{
        marginLeft: 5,
        width: '90%',
    },
    pesquisaContainer:{
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})