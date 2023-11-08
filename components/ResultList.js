import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import ResultDetails from './ResultDetails';

const ResultList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title} ({results.length} options)</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={(result) => {
                    return (
                        <ResultDetails
                            navigation={navigation}
                            result={result.item}>
                        </ResultDetails>
                    )
                }}
            >
            </FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5
    }
});

export default ResultList