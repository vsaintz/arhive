import React from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width / 3;

const posts = [
    { id: '1', uri: 'https://i.pinimg.com/736x/49/22/18/4922189e1064df37d46035f8a1554f3e.jpg' },
    { id: '2', uri: 'https://i.pinimg.com/736x/7d/15/ec/7d15ec46c1b67360d3956d30f421be84.jpg' },
    { id: '3', uri: 'https://i.pinimg.com/736x/1f/84/0f/1f840fce074713ce1e964b2b252fddd3.jpg' },
    { id: '4', uri: 'https://i.pinimg.com/736x/1b/a8/36/1ba836749a95c5579139d9a4180dcd99.jpg' },
    { id: '5', uri: 'https://i.pinimg.com/736x/40/7e/41/407e41b902e6f1a7eaef473dac5b36a8.jpg' },
    { id: '6', uri: 'https://i.pinimg.com/736x/5a/c2/f1/5ac2f18109236b47dcafba6dcd9a2e07.jpg' },
    { id: '7', uri: 'https://i.pinimg.com/736x/94/78/4b/94784bb3ecff08aa05645e85f1ea80a7.jpg' },
    { id: '8', uri: 'https://i.pinimg.com/736x/0b/23/a5/0b23a5d1805ea62ac10c02a22b88b7fb.jpg' },
    { id: '9', uri: 'https://i.pinimg.com/736x/86/5c/29/865c29a267aeeaa1576c70bbf0f81361.jpg' },
    { id: '10', uri: 'https://i.pinimg.com/736x/2e/4f/bc/2e4fbc98b05c6ddea1af26231dab1d8e.jpg' },
    { id: '11', uri: 'https://i.pinimg.com/736x/b4/b0/8c/b4b08cdca88fedc0a361eaa552404d25.jpg' },
    { id: '12', uri: 'https://i.pinimg.com/736x/28/c1/f2/28c1f265044190033b0711a850b6f3d5.jpg' },

];



const PostGrid = () => {
    const renderItem = ({ item }: { item: { id: string; uri: string } }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
    );

    return (
        <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            contentContainerStyle={styles.grid}
            scrollEnabled={false}
        />
    );
};

const styles = StyleSheet.create({
    grid: {
        padding: 1,
    },
    imageContainer: {
        flex: 1,
        margin: 1,
    },
    image: {
        width: imageSize - 2,
        height: imageSize - 2,
    },
});

export default PostGrid;