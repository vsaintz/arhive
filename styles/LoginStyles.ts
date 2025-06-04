import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        color: '#aaa',
        textAlign:'center',
        fontSize: 14,
        marginBottom: 24,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        color: '#fff',
        marginBottom: 4,
        fontSize: 14,
    },
    input: {
        backgroundColor: '#111',
        padding: 12,
        borderRadius: 6,
        color: '#fff',
        borderWidth: 0.5,
        borderColor: '#333',
    },
    passwordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    forgotText: {
        color: '#999',
        fontSize: 13,
    },
    loginButton: {
        backgroundColor: '#E5E5E5',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 8,
    },
    loginButtonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    googleButton: {
        flexDirection: 'row',
        backgroundColor: '#111',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#333',
        marginTop: 12,
        gap: 10,
    },
    googleButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    signupText: {
        color: '#aaa',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 24,
    },
    signupLink: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
});