import React from 'react';
import {
    View,
    FlatList,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { styles } from '@/styles/TemplateGalleryStyles';

import { TemplatePreview01 } from '@/components/previews/TemplatePreview-01';
import { TemplatePreview02 } from '@/components/previews/TemplatePreview-02';
import { TemplatePreview03 } from '@/components/previews/TemplatePreview-03';

const SCREEN_WIDTH = Dimensions.get('window').width;

type TemplateCard = {
    id: string;
};

const templates: TemplateCard[] = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
];

export const TemplateGallery: React.FC = () => {
    const renderTemplatePreview = (id: string) => {
        switch (id) {
            case '1':
                return <TemplatePreview01 />;
            case '2':
                return <TemplatePreview02 />;
            case '3':
                return <TemplatePreview03 />;
            default:
                return null;
        }
    };

    const renderItem = ({ item }: { item: TemplateCard }) => (
        <View style={styles.templateContainer}>
            <View style={[styles.card, { width: SCREEN_WIDTH - 20 }]}>
                {renderTemplatePreview(item.id)}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.templateButton}>
                    <Text style={styles.buttonText}>Try Template</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.galleryContainer}>
            <FlatList
                data={templates}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};
