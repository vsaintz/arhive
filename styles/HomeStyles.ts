import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
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
        fontSize: 35,
        width: '100%',
        color: '#000'
    },
    templateTextSecondary: {
        fontSize: 35,
        width: '100%',
        color: '#000',
        marginTop: -5,
    },
    templateSubtext: {
        marginTop: 10,
        fontSize:13,
        color: '#666'
    }
});
