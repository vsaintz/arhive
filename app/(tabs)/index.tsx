import {
  ScrollView,
  Pressable,
  View, Text,
  Image, StatusBar,
  SafeAreaView, Platform
} from 'react-native';
import { router } from 'expo-router';
import { styles } from '@/styles/IndexStyles';
import { Ionicons } from '@expo/vector-icons';
import { HeroView } from '@/components/HeroView';
import PostcardFilterBar from '@/components/PostcardFilterBar';
import { TemplateGallery } from '@/components/TemplateGallery';

import { auth } from '@/firebase-config'
import { useState, useEffect } from 'react';

export default function HomeScreen() {

  const [displayName, setDisplayName] = useState<string | null>(null);

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleDateString('default', { month: 'short' });

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || "Guest");
    }
  }, []);

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <StatusBar barStyle='dark-content' backgroundColor="#fff" />
      <View style={styles.header}>
        <Pressable onPress={() => router.push('/(tabs)/profile')}>
          <Image
            source={require('@/assets/images/profileicon.jpg')}
            style={styles.logo}
          />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome, {displayName}</Text>
          <Text style={styles.subText}>Today, {day} {month}</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <ScrollView contentContainerStyle={styles.container}>

        <View> <HeroView /> </View>

        <View style={styles.templateTextContainer}>
          <Text style={styles.templateTextPrimary}>Check out our</Text>
          <Text style={styles.templateTextSecondary}>Newest templates</Text>
          <Text style={styles.templateSubtext}>Craft beautiful postcards with our latest templates, offering stunning designs for any moment worth sharing.</Text>
        </View>

        <View> <PostcardFilterBar /> </View>
        <View> <TemplateGallery /> </View>

      </ScrollView>
    </SafeAreaView>
  );
}
