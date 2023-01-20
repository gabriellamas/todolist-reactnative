import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { useState } from 'react';
import { Participant } from '../../components/participant';
import { styles } from './styles'


export function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    const [inputName, setInputName] = useState('')


    const handlePress = (name: string): void => {

        if (participants.includes(name)) {
            return Alert.alert('Todo já cadastrada')
        }

        setParticipants((old) => [...old, name])
    }

    const handleRemove = (name: string): void => {
        Alert.alert('Remover', `Remover o participante ${name} ?`,
            [
                {
                    text: 'sim',
                    onPress: () => removeTodo(name),
                    style: 'destructive'
                },
                {
                    text: 'não'
                }
            ])
    }
    const removeTodo = (name: string): void => setParticipants(old => old.filter(nameItem => nameItem !== name))
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Your amazing todo list!
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={'rgba(255,255,255,0.3)'}
                    onChangeText={setInputName}
                    value={inputName}
                />
                <TouchableOpacity style={styles.button} onPress={() => handlePress(inputName)}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <Participant name={item} remove={() => handleRemove(item)} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <Text style={{ color: '#fff' }}>Nenhum item adicionado ainda</Text>}
            />
        </View >
    );
}


