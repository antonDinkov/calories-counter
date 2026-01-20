import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";

export default function Calories(props) {
    return (
        <>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.caloriesLimit}</Text>
            <Text>Calories Remaining</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={props.limit}
                value={props.consumedCalories}
                step={1}
                minimumTrackTintColor="#4F46E5"   // активна част
                maximumTrackTintColor="#D1D5DB"   // неактивна част
                thumbTintColor="#4F46E5"          // кръгчето
            />
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <View>
                    <Text>Goal</Text>
                    <Text>{props.limit}</Text>
                </View>
                <View>
                    <Text>Food</Text>
                    <Text>{props.totalConsumedCalories()}</Text>
                </View>
                <View>
                    <Text>Exercise</Text>
                    <Text>0</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    slider: {
        width: "100%",
        height: 80,
    }
})