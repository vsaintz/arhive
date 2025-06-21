import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import TagsComponent from '@/components/TagsComponent';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const TemplatePreview02 = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('@/assets/templates/yumthang.jpg')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.topRow}>
        <Text style={styles.topText}>NO. 01</Text>
        <Text style={styles.topText}>FORM YOUR OWN OPINION</Text>
        <Text style={styles.topText}>2025</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>YUMTHANG</Text>
        <Text style={styles.hashtag}>VALLEY</Text>
      </View>
    </ImageBackground>

    <View style={styles.bottomSection}>
      <Text style={styles.issueName}>The Wanderer Issue</Text>
      <View style={styles.teasersContainer}>
        <Text style={styles.teaserText}>Wandering Yumthang’s Valley of Flowers</Text>
        <Text style={styles.teaserText}>Soaking in Yumthang’s hot springs</Text>
        <Text style={styles.teaserText}>Yak rides amidst Yumthang’s meadows</Text>
      </View>
    </View>
    <View style={{ marginVertical: 5, }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 8, paddingHorizontal: 12 }}>
        Tags
      </Text>
      <TagsComponent tags={['yumthang', 'valley of flowers', 'travel photography', 'himalayas', 'adventure travel']} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  imageBackground: {
    height: SCREEN_WIDTH * 0.7,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  titleContainer: {
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  hashtag: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  bottomSection: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  issueName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  teasersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teaserText: {
    fontSize: 11,
    color: '#000',
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
});
