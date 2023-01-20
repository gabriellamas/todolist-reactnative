import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        paddingTop: 100,
        paddingRight: 32,
        paddingLeft: 32,
        paddingBottom: 32,
        flex: 1,
    },
    text: {
        color: '#fff',
        fontSize: 56
    },
    form: {
        flexDirection: 'row',
        marginTop: 32,
        marginBottom: 32,
        width: '100%'
    },
    input: {
        backgroundColor: '#1f1e25',
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        color: '#fff',
        fontSize: 16,
        flex: 1,
        marginRight: 12,
        borderRadius: 4
    },
    button: {
        backgroundColor: '#31CF67',
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
