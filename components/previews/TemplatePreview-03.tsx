import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import TagsComponent from '@/components/TagsComponent';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const TemplatePreview03 = () => (
  <View>
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
          <Text style={styles.subtitleText}>
            FOR PEOPLE THAT <Text style={styles.italicText}>feels </Text>LIKE poetry
          </Text>
        </View>
      </View>
    </View>
    <View style={{ marginVertical: 16, }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 8, paddingHorizontal: 12 }}>
        Tags
      </Text>
      <TagsComponent tags={['personal', 'friends', 'sikkim diaries', 'travel photography', 'himalayas', 'adventure travel']} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: SCREEN_WIDTH * 0.9,

    overflow: 'hidden',
    backgroundColor: '#FFF6E5',
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF6E5',
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
    flexWrap: 'wrap',
  },
  subtitleText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#D76D5A',
    textAlign: 'center',
  },
  italicText: {
    fontStyle: 'italic',
  },
});
