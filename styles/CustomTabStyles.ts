import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        height: 60,
        paddingBottom: Platform.OS === 'ios' ? 20 : 10,
        paddingTop: 5,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 10,
    },
});