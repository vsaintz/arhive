import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const TemplatePreview03 = () => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                source={require('@/assets/templates/keat.jpg')}
                style={styles.image}
            />
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.estText}>gtk the '05</Text>

            <Text style={styles.titleText}>IDEA HAVEN</Text>

            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitleRegular}>FOR PEOPLE THAT </Text>
                <Text style={styles.subtitleScript}>feels </Text>
                <Text style={styles.subtitleRegular}>LIKE poetry</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 300,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 1,
        backgroundColor: '#FFF6E5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    estText: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#D76D5A',
        marginBottom: 5,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#D76D5A',
        marginBottom: 5,
    },
    subtitleContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    subtitleRegular: {
        fontSize: 10,
        fontWeight: '600',
        color: '#D76D5A',
    },
    subtitleScript: {
        fontSize: 10,
        fontStyle: 'italic',
        color: '#D76D5A',
    },
});
