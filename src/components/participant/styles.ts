import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10
    },
    textArea: {
        backgroundColor: '#1f1e25',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        color: '#fff',
        fontSize: 16,
        flex: 1,
        marginRight: 12,
        borderRadius: 4,
    },
    button: {
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: 56,
        borderRadius: 4
    },
    buttonText: {
        color: '#fff',
        fontSize: 23
    }
});
