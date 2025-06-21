import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { TemplatePreview01 } from '@/components/previews/TemplatePreview-01';
import { TemplatePreview02 } from '@/components/previews/TemplatePreview-02';
import { TemplatePreview03 } from '@/components/previews/TemplatePreview-03';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const templates = [
  { id: '1', Component: TemplatePreview01 },
  { id: '2', Component: TemplatePreview02 },
  { id: '3', Component: TemplatePreview03 },
];

export const TemplateGallery: React.FC = () => {
  return (
    <View style={styles.scrollContainer}>
      {templates.map(({ id, Component }) => (
        <View key={id} style={styles.templateContainer}>
          <View style={styles.card}>
            <Component />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    alignItems: 'center',
  },
  templateContainer: {
    width: SCREEN_WIDTH * 0.95,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#D1D5DB',
    borderWidth: 0.5,
    overflow: 'hidden',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  templateButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});
