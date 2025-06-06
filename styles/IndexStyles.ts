import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        fontFamily: 'System',
        paddingTop: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        borderColor: '#D1D5DB',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 15,
        fontWeight: '600',
    },
    subText: {
        fontSize: 12,
        color: '#666',
    },
    templateTextContainer: {
        width: '100%',
        marginTop: 30,
    },
    templateTextPrimary: {
        fontSize: 32,
        width: '100%',
        color: '#000'
    },
    templateTextSecondary: {
        fontSize: 32,
        width: '100%',
        color: '#000',
        marginTop: -5,
    },
    templateSubtext: {
        marginTop: 15,
        fontSize: 13,
        color: '#666'
    }
});
