import { Modal, Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import Button from "./Button";
import { X } from "lucide-react-native";
import { useState } from "react";

export default function AddFood(props) {
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    return (
        <Modal
            visible={props.modalView}
            transparent
            animationType="fade"
            onRequestClose={props.toggleModal}
        >
            <Pressable style={styles.overlay} onPress={props.toggleModal}>
                <Pressable style={styles.modalBox} onPress={() => { }}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Add Food To {props.mealTime}</Text>
                        <Pressable onPress={props.toggleModal} hitSlop={10}>
                            <X />
                        </Pressable>
                    </View>
                    <View>
                        <Text>Food Name</Text>
                        <TextInput style={styles.input} placeholder="e.g. Pizza slice" value={foodName} onChangeText={setFoodName} />
                    </View>
                    <View>
                        <Text>Calories</Text>
                        <TextInput style={styles.input} placeholder="0" keyboardType="numeric" value={calories} onChangeText={setCalories} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text>Protein (g)</Text>
                            <TextInput style={[styles.input, styles.inputMacros]} placeholder="0" keyboardType="numeric" value={protein} onChangeText={setProtein} />
                        </View>
                        <View>
                            <Text>Carbs (g)</Text>
                            <TextInput style={[styles.input, styles.inputMacros]} placeholder="0" keyboardType="numeric" value={carbs} onChangeText={setCarbs} />
                        </View>
                        <View>
                            <Text>Fat (g)</Text>
                            <TextInput style={[styles.input, styles.inputMacros]} placeholder="0" keyboardType="numeric" value={fat} onChangeText={setFat} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Button title={'Back'} close={props.toggleModal} />
                        <Button title={'Add Food'} backGroundBtn={'black'} textBtn={'white'} onPress={() => {
                            props.nutriDataExtractor({ foodName, calories, protein, carbs, fat }, props.mealTime);
                            props.toggleModal();
                        }} />
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        cursor: 'default'
    },
    modalBox: {
        width: "70%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        elevation: 5, // Android shadow
        shadowColor: "#000", // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        gap: 10,
        cursor: 'default'
    },
    titleBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    input: {
        backgroundColor: '#f3f3f5',
        borderRadius: 5,
        padding: 5,
        height: 25
    },
    inputMacros: {
        width: 50
    }
});
