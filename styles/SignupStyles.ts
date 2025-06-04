import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        position: 'relative',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#aaa',
        marginBottom: 20,
        textAlign: 'center',
    },
    loginButton: {
        position: 'absolute',
        top: 25,
        right: 30,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#111',
        borderColor: '#333',
        borderWidth: 0.5,
        borderRadius: 6,
        color: '#fff',
        width: '100%',
        padding: 12,
        marginBottom: 12,
    },
    emailButton: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 6,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    emailButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#333',
    },
    orText: {
        color: '#666',
        marginHorizontal: 8,
        fontSize: 12,
    },
    googleButton: {
        flexDirection: 'row',
        backgroundColor: '#111',
        borderColor: '#333',
        borderWidth: 0.5,
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 24,
        gap: 10,
    },
    googleButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    footerText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
    },
    link: {
        color: '#aaa',
        textDecorationLine: 'underline',
    },

})