import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import TagsComponent from '@/components/TagsComponent';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const TemplatePreview01 = () => (
  <View style={styles.container}>
    <Image
      source={require('@/assets/templates/nathula-pass.jpg')}
      style={styles.headerImage}
    />

    <View style={styles.titleContainer}>
      <Text style={styles.title}>Nathula <Text style={styles.titleItalic}>Pass</Text></Text>
      <Text style={styles.titleDate}>DATE: 20 MAY 2025</Text>
    </View>

    <View style={styles.detailsContainer}>
      <Text style={styles.detailsText}>Nestled at 14,140 feet in the Himalayas, Nathula Pass in Sikkim is a breathtaking blend of natural splendor and historical significance.
        Once a vital artery of the ancient Silk Route, this high-altitude pass connects India with Tibet, offering panoramic views of snow-clad peaks and the serene Chumbi Valley.
        A journey along the winding Gangtok-Nathula Highway unveils cascading waterfalls, vibrant prayer flags, and the crisp mountain air, making it an unforgettable adventure.
        Visit this iconic border post to witness its rich legacy and stunning landscapes, a true gem of Sikkim’s heritage.</Text>
    </View>

    <View style={{ marginVertical: 5, }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 8, paddingHorizontal: 12 }}>
        Tags
      </Text>
      <TagsComponent tags={['nathula pass','travel', 'adventure', 'himalayas', 'high altitude', 'mountain']} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1A3C34',
  },
  titleItalic: {
    fontStyle: 'italic',
    marginLeft: 5,
  },
  titleDate: {
    fontSize: 13,
    color: '#666',
  },
  detailsContainer: {
    padding: 16,
  },
  detailsText: {
    fontSize: 13,
    textAlign: 'justify',
    color: '#444',
    lineHeight: 18,
  },
});
