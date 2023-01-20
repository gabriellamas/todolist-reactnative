import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'

interface Participant {
    name: string;
    remove: () => void;
}

export function Participant({ name, remove }: Participant) {
    return (
        <View style={styles.container}>
            <Text style={styles.textArea}>
                {name}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => remove()}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View >
    );
}


