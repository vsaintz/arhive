import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

interface Filter {
    id: string;
    name: string;
}

const filters: Filter[] = [
    { id: 'all', name: 'all' },
    { id: 'personal', name: 'personal' },
    { id: 'event', name: 'event' },
    { id: 'business', name: 'business' },
    { id: 'holiday', name: 'holiday' },
];

const PostcardFilterBar: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>('all');

    const handleFilterPress = (filterId: string) => {
        setSelectedFilter(filterId);
    };

    return (
        <View style={styles.container}>
            <View style={styles.filterBar}>
                <FlatList
                    data={filters}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <FilterButton
                            name={item.name}
                            isSelected={selectedFilter === item.id}
                            onPress={() => handleFilterPress(item.id)}
                        />
                    )}
                    contentContainerStyle={styles.filterList}
                />
            </View>
        </View>
    );
};

interface FilterButtonProps {
    name: string;
    isSelected: boolean;
    onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ name, isSelected, onPress }) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: withSpring(scale.value) }],
        backgroundColor: isSelected ? '#000' : '#f7f7f7',
    }));

    const handlePressIn = () => {
        scale.value = 0.95;
    };

    const handlePressOut = () => {
        scale.value = 1;
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.8}
        >
            <Animated.View style={[styles.filterButton, animatedStyle]}>
                <Text style={[styles.filterText, { color: isSelected ? '#FFFFFF' : '#333333' }]}>
                    {name}
                </Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
    },
    filterBar: {
        paddingVertical: 10,
    },
    filterList: {
        gap: 8,
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 8,
    },
    filterText: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default PostcardFilterBar;