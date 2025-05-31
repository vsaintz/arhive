import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const HeroView = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    console.log('Search Query:', text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <View style={styles.searchBar}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Template"
            placeholderTextColor="#888888"
            value={searchQuery}
            onChangeText={handleSearch}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.filterIcon}>
          <AntDesign name="filter" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Augment the Ancient</Text>
        <Text style={styles.description}>Discover the culture and stories of Sikkim through interactive AR postcards.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
          <FontAwesome6 name="arrow-right-long" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
  },
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 7,
  },
  searchInput: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 10,
  },
  filterIcon: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#000',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'flex-start',
    borderWidth: 0.5,
    borderColor: '#D1D5DB',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});