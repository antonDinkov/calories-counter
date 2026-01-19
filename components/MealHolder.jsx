import { Dot } from "lucide-react-native";
import { Pressable, StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function MealHolder(props) {
    return (
        <View style={{ backgroundColor: '#f9fafb', padding: 7 }}>
            <View style={styles.sectionView}>
                <Text>{props.data.foodName}</Text>
                <Text>{props.data.calories} cal</Text>
            </View>
            <View style={styles.sectionView}>
                <View style={styles.nutritionView}>
                    <Text style={styles.nutruTextStyle}>P: {props.data.protein}g</Text>
                    <View style={styles.dot} />
                    <Text style={styles.nutruTextStyle}>C: {props.data.carbs}g</Text>
                    <View style={styles.dot} />
                    <Text style={styles.nutruTextStyle}>F: {props.data.fat}g</Text>
                </View>
                <Pressable style={styles.button} onPress={() => props.removeHandler(props.mealTime, props.index, props.data)}>
                    <Text style={[styles.remove, styles.nutruTextStyle]}>Remove</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nutritionView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
    width: 2,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#000',
    marginHorizontal: 6,
    },
    nutruTextStyle: {
        fontSize: 12,
    },
    remove: {
        color: 'red',
    },
    button: {
        hitSlop: 10,
        cursor: 'default'
    }
})