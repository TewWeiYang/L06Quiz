import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Quiz = ({ imageUri, selectedValue, onValueChange, options, icon_name, icon_color }) => {
    return (
        <View style={styles.questionContainer}>
            <Image source={{ uri: imageUri }} style={styles.gamesImage} />
            <Text style={styles.questionText}>What video games is this?</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    style={styles.picker}
                >
                    <Picker.Item label="Select an video games" value="" enabled={false} color="#888" />
                    {options.map((option, index) => (
                        <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    questionContainer: {
        marginBottom: 0,
        backgroundColor: '#FFFFFF',
    },
    gamesImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    questionText: {
        fontSize: 14,
        color: '#757575',
        paddingHorizontal: 12,
        paddingTop: 8,
    },
    pickerContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    picker: {
        width: '100%',
        height: 50,
    },
});

export default Quiz;