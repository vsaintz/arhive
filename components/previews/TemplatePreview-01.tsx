import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const TemplatePreview01 = () => (
  <View style={styles.container}>
    <Image
      source={require('@/assets/templates/francesco-ungaro.jpg')}
      style={styles.headerImage}
    />

    <View style={styles.titleContainer}>
      <Text style={styles.title}>VILLA <Text style={styles.titleItalic}>ESCAPE</Text></Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>DATE: 20 MAY 2025</Text>
      <Text style={styles.detailsText}>FROM: Roland Lepcha</Text>
      <Text style={styles.detailsText}>FOR: Prayag</Text>
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
    backgroundColor: '#fff',
    overflow: 'hidden',
    width: '100%',
  },
  headerImage: {
    width: '100%',
    height: SCREEN_WIDTH * 0.6,
    resizeMode: 'cover',
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    flexDirection: 'row',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A3C34',
  },
  titleItalic: {
    fontStyle: 'italic',
    marginLeft: 5,
  },
  detailsContainer: {
    padding: 16,
  },
  detailsText: {
    fontSize: 12,
    color: '#444',
    lineHeight: 18,
  },
  logoContainer: {
    alignItems: 'flex-end',
    padding: 16,
  },
  logoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1A3C34',
  },
});
