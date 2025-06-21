import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, Platform, Dimensions, ScrollView } from 'react-native';
import { auth } from '@/firebase-config';
import { useState, useEffect } from 'react';
import PostGrid from '@/components/PostGrid';

export default function ProfileScreen() {
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || "Guest");
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.containerContent} style={styles.container}>
        <Image
          source={require('@/assets/images/c75eb98386f768e88fe3778a18066bf8.jpg')}
          style={styles.headerImage}
        />
        <View style={styles.profileView}>
          <Image
            source={require('@/assets/images/c65eb98386f768e88fe3778a18066bf7.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>{displayName}</Text>
          <Text style={styles.profileSubText}>Keep things moving</Text>
        </View>

        <View style={styles.postContentGrid}> <PostGrid /> </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  containerContent: {
    paddingBottom: 20,
  },
  headerImage: {
    zIndex: -1,
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height * 0.2,
    resizeMode: 'cover',
  },
  profileView: {
    top: Dimensions.get('window').height * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  profileSubText: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },

  postContentGrid: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 90,
  },
});