import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Linking, Text, View } from 'react-native';

export default function CameraScreen() {
  useFocusEffect(
    React.useCallback(() => {
      Linking.openURL('https://prayag0895.github.io/mcaminiproject2025p4qejt');
      return () => { };
    }, [])
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Opening Camera URL...</Text>
    </View>
  );
}