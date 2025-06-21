import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TagsComponentProps {
    tags: string[];
}

const TagsComponent: React.FC<TagsComponentProps> = ({ tags }) => {
    return (
        <View style={styles.container}>
            {tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        padding: 8,
        backgroundColor: '#fff',
    },
    tag: {
        backgroundColor: '#f0f0f5',
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginBottom: 1,
    },
    tagText: {
        color: '#333',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
    },
});

export default TagsComponent;