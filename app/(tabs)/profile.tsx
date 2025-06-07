import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, Platform, ScrollView, Dimensions } from 'react-native';
import { auth } from '@/firebase-config';
import { useState, useEffect } from 'react';

export default function ProfileScreen() {
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || "Guest");
    }
  }, []);

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <StatusBar barStyle='dark-content' backgroundColor="#fff" />
      <ScrollView style={styles.container}>
        <Image
          source={require('@/assets/images/header-image.jpg')}
          style={styles.headerImage}
        />
        <View style={styles.profileView}>
          <Image
            source={require('@/assets/images/profileicon.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>{displayName}</Text>
          <Text style={styles.profileSubText}>Welcome to my profile!</Text>
        </View>

        <View style={styles.profileContent}>
          <View>
            <Text style={{ color: '#000', textAlign: 'left' }}>Works</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
    resizeMode: 'cover',
  },
  profileView: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '95%',
    borderRadius: 15,
    padding: 20,
    alignSelf: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#f0f0f0',
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  profileSubText: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },
  profileContent: {
    width: '95%',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});