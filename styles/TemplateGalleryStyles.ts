import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    galleryContainer: {
        marginTop: 5,
    },
    templateContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: '#D1D5DB',
    },
    card: {
        flex: 1,
        borderRadius: 15,

        overflow: 'hidden',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    templateButton: {
        borderRadius: 5,
        padding: 8,
        marginVertical: 10,
        backgroundColor: '#000',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
    },
});
