import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const ResultDetails = ({ result, navigation, route }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {
            id: result.id
        })}>
            <View style={styles.container}>
                <Image style={styles.imageStyles} source={{ uri: result.image_url }}></Image>
                <Text style={styles.nameStyles}>{result.name}</Text>
                <Text>{result.rating} Stars  {result.review_count} Reviews</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyles: {
        width: 250,
        borderRadius: 4,
        height: 125,
        marginBottom: 5
    },
    nameStyles: {
        fontWeight: 'bold',
    }
})
export default ResultDetails;