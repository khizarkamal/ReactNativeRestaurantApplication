import React from 'react'
import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Home Page</Text>
            <Button
                title="Go to Search Page"
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    )
}

export default Home