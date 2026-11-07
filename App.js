import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Alert, View, Text,icon_name, icon_color} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// Import the component you created in the other file
// Note: Make sure Quiz.js is in the same folder, or update the path (e.g., './components/Quiz')
import Quiz from './Componet/Quiz';

const Interface = () => {
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: ''
    });

    const gamesOptions = ['Pac Man', 'Space Invaders', 'Tetris', 'Singapore', 'Super Mario Bros. 3'];

    // 2. Define the correct answers
    const correctAnswers = {
        q1: 'Pac Man',
        q2: 'Space Invaders',
        q3: 'Tetris',
        q4: 'Super Mario Bros. 3'
    };

// 3. Update the submit handler to calculate the score
    const handleSubmit = () => {
        let score = 0;

        // Check question 1
        if (answers.q1 === correctAnswers.q1) {
            score += 1;
        }

        // Check question 2
        if (answers.q2 === correctAnswers.q2) {
            score += 1;
        }

        // Check question 3
        if (answers.q3 === correctAnswers.q3) {
            score += 1;
        }

        // Check question 4
        if (answers.q4 === correctAnswers.q4) {
            score += 1;
        }

        // Display the exact alert format from the reference image
        Alert.alert('', `You have ${score} correct answers!`);
    };

    return (
        <View style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text></Text>

                <View style={styles.headerContainer}>
                    <FontAwesome5 name="gamepad" size={30} color="#4285F4" style={styles.headerIcon} />
                    <Text style={styles.mainTitle}>Video Game Quiz</Text>
                </View>

                <Quiz
                    imageUri="https://i.guim.co.uk/img/media/8152f8ea7f06fd8ef5c68a3a594e6ac35dfd774b/0_342_800_480/master/800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42bb412858826e59cd33e40975ca3ee1"
                    onValueChange={(val) => setAnswers({ ...answers, q1: val })}
                    options={gamesOptions}
                />

                <Quiz
                    imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPF-Igxpzb3ZjikJDqubTwb5SjFdd0eJ-HC5S44Rl60EvO40V5YGyNhhk&s=10"
                    onValueChange={(val) => setAnswers({ ...answers, q2: val })}
                    options={gamesOptions}
                />

                <Quiz
                    imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcJX2pNXmFijx-rqfoZqjAyNjzUx1nVOx8KgKsK1Gwr52bnD_bDzPBqC9RyW2NAqmKT7rG4Y04-KiVpaS6-r1AjoaPnQ_1jwlWtN16w&s=10"
                    onValueChange={(val) => setAnswers({ ...answers, q3: val })}
                    options={gamesOptions}
                />

                <Quiz
                    imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWv2ceCez440ul0FizZgq6WcDL8BFHHEuZLhNkxlhv_VAQcEZhhkvjFJR9I-2-Sf1DO5HvSIHR14xy90OrBQPZraHVbyQaka075D-6lxhjA&s=10"
                    onValueChange={(val) => setAnswers({ ...answers, q4: val })}
                    options={gamesOptions}
                />

            </ScrollView>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    submitButton: {
        backgroundColor: '#4285F4',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    mainTitle: {
        fontSize: 28, // Bigger text for the main header
        fontWeight: 'bold',
        color: '#212121',
    },
    headerIcon:{
        marginRight: 10,
    }
}
);

export default Interface;