import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [results, errorMessage, onTermSubmit] = useResult();

    const costEffectiveResults = results.filter((result) => {
        return result.price === '$'
    });

    const bitPricierResults = results.filter((result) => {
        return result.price === '$$'
    });

    const bigSpenderResults = results.filter((result) => {
        return result.price === '$$$'
    });

    return (
        <View>
            <View style={styles.backgroundStyle}>
                <AntDesign style={{
                    alignSelf: 'center',
                    marginHorizontal: 15
                }} name="search1" size={30} color="black" />
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={term}
                    onChangeText={text => setTerm(text)}
                    style={styles.textStyle}
                    onEndEditing={() => onTermSubmit(term)}
                    placeholder='Search'></TextInput>
            </View >
            {errorMessage ? <Text style={styles.errorMsgStyle}>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList title="Cost Effective" navigation={navigation} results={costEffectiveResults} ></ResultList>
                <ResultList title="Bit Pricer" navigation={navigation} results={bitPricierResults}></ResultList>
                <ResultList title="Big Spender" navigation={navigation} results={bigSpenderResults}></ResultList>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    textStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    errorMsgStyle: {
        color: 'red',
        textAlign: 'center',
        marginVertical: 10
    }
})


export default SearchScreen