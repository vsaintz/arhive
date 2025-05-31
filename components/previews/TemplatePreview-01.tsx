import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const TemplatePreview01 = () => (
    <View style={styles.container}>

        <View style={styles.header}>
            <Image
                source={require('@/assets/templates/francesco-ungaro.jpg')}
                style={styles.headerImage}
            />
        </View>

        <View style={styles.titleContainer}>
            <Text style={styles.titleVilla}>VILLA</Text>
            <Text style={styles.titleEscape}>ESCAPE</Text>
        </View>

        <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>DATE: 06 MAY 2024</Text>
            <Text style={styles.detailsText}>FROM: London Gatwick</Text>
            <Text style={styles.detailsText}>FOR: Mitsahis</Text>
            <Text style={styles.detailsText}>BOARD: Self-Catering</Text>
        </View>

        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>GTK</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
    },
    header: {
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
    },
    headerImage: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        resizeMode: 'cover',
    },
    titleContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    titleVilla: {
        fontSize: 32,
        fontWeight: '800',
        color: '#1A3C34',
    },
    titleEscape: {
        fontSize: 32,
        fontStyle: 'italic',
        color: '#1A3C34',
        marginLeft: 5,
    },
    detailsContainer: {
        padding: 15,
    },
    detailsText: {
        fontSize: 12,
        color: '#444',
        lineHeight: 18,
    },
    logoContainer: {
        alignItems: 'flex-end',
    },
    logoText: {
        fontSize: 14,
        paddingRight: 15,
        paddingBottom: 15,
        fontWeight: 'bold',
        color: '#1A3C34',
    },
});
