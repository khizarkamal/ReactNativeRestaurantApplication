import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import yelp from "../api/yelp";


const SingleResultScreen = ({ navigation, route }) => {
    const [result, setResult] = useState({});
    const searchID = route.params.id;
    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            const data = await response.data;
            setResult(data);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getResult(searchID);
    }, []);


    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }}></Image>
                }}
            >
            </FlatList>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    title: {
        fontSize: 18,
        borderBottomWidth: 3,
        borderColor: 'gray',
        textAlign: 'center',
        marginBottom: 10
    },
    imageStyle: {
        height: 200,
        width: 300,
        borderRadius: 5,
        marginBottom: 10,
    }
});

export default SingleResultScreen;