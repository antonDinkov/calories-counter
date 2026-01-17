import { Text, View } from "react-native";
import { CircularSlider } from "./CircularSlider";

export default function Macronutrients({ consumedProtein, goalProtein, consumedCarbs, goalCarbs, consumedFat, goalFat, sliderSize }) {
    return (
        <>
            <Text>Macronutrients</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <CircularSlider
                        consumed={consumedProtein}
                        goal={goalProtein}
                        size={sliderSize}
                    />
                    <Text>Protein</Text>
                    <Text>{goalProtein}g goal</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <CircularSlider
                        consumed={consumedCarbs}
                        goal={goalCarbs}
                        size={sliderSize}
                    />
                    <Text>Carbs</Text>
                    <Text>{goalCarbs}g goal</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <CircularSlider
                        consumed={consumedFat}
                        goal={goalFat}
                        size={sliderSize}
                    />
                    <Text>Fat</Text>
                    <Text>{goalFat}g goal</Text>
                </View>
            </View>
        </>
    )
}