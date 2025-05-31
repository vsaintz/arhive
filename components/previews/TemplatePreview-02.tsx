
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export const TemplatePreview02 = () => (
    <View style={styles.container}>
        <ImageBackground
            source={require('@/assets/templates/yumthang.jpg')}
            style={styles.imageBackground}
            resizeMode="cover"
        >
            <View style={styles.topRow}>
                <Text style={styles.topText}>NO. 03</Text>
                <Text style={styles.topText}>FORM YOUR OWN OPINION</Text>
                <Text style={styles.topText}>2025</Text>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.mainTitle}>Awoke</Text>
                <Text style={styles.hashtag}>Stay awoke</Text>
            </View>
        </ImageBackground>

        <View style={styles.bottomSection}>
            <Text style={styles.issueName}>The Wanderer Issue</Text>
            <View style={styles.teasersContainer}>
                <Text style={styles.teaserText}>Don’t trust anyone, including me</Text>
                <Text style={styles.teaserText}>Backpacking through Gangtok</Text>
                <Text style={styles.teaserText}>Street food establishments</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
    },
    imageBackground: {
        height: 300,
        borderRadius: 15,
        justifyContent: 'space-between',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    topText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#FFFFFF',
        textTransform: 'uppercase',
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    mainTitle: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textTransform: 'uppercase',
    },
    hashtag: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
        marginTop: 5,
    },
    bottomSection: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        alignItems: 'center',
    },
    issueName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 10,
    },
    teasersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    teaserText: {
        fontSize: 10,
        color: '#000000',
        width: '30%',
        textAlign: 'center',
    },
});