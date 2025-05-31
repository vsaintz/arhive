import { ScrollView, View, Text, Image, StatusBar } from 'react-native';
import { styles } from '@/styles/IndexStyles';
import { Ionicons } from '@expo/vector-icons';
import { HeroView } from '@/components/HeroView';
import PostcardFilterBar from '@/components/PostcardFilterBar';
import { TemplateGallery } from '@/components/TemplateGallery';

export default function HomeScreen() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleDateString('default', { month: 'short' });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Image
          source={require('@/assets/images/logo.jpg')}
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome, Elliot</Text>
          <Text style={styles.subText}>Today, {day} {month}</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <View> <HeroView /> </View>

      <View style={styles.templateTextContainer}>
        <Text style={styles.templateTextPrimary}>Check out our</Text>
        <Text style={styles.templateTextSecondary}>Newest templates</Text>
        <Text style={styles.templateSubtext}>Craft beautiful postcards with our latest templates, offering stunning designs for any moment worth sharing.</Text>
      </View>

      <View> <PostcardFilterBar /> </View>
      <View> <TemplateGallery /> </View>
      <View style={{ marginVertical: 10 }}><Text style={{ color: '#fff' }}>Temp Space</Text></View>

    </ScrollView>
  );
}
