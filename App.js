import { StatusBar } from 'expo-status-bar';
import { Book, Droplet, House, Plus, TrendingUp, User, Weight } from 'lucide-react-native';
import { Dimensions, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { RadialSlider } from 'react-native-radial-slider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CircularSlider } from './components/CircularSlider';

export default function App() {
    const { width } = Dimensions.get('screen');
    const sliderSize = width / 5;

    /* const DAILY_GOAL = 2000;
    const consumedCalories = 750;
    const remainingCalories = DAILY_GOAL - consumedCalories; */
    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView style={styles.head} >
                <Text>Calories Counter</Text>
                <StatusBar style="auto" />
            </SafeAreaView>
            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.card}>
                    <Text>2000</Text>
                    <Text>Calories Remaining</Text>
                </View>
                <View style={styles.card}>
                    <Text>Macronutrients</Text>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <View style={{ alignItems: 'center' }}>
                            <CircularSlider
                                consumed={150}
                                goal={150}
                                size={sliderSize}
                            />
                            <Text>Protein</Text>
                            <Text>{150}g goal</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <CircularSlider
                                consumed={95}
                                goal={200}
                                size={sliderSize}
                            />
                            <Text>Carbs</Text>
                            <Text>{200}g goal</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <CircularSlider
                                consumed={22}
                                goal={65}
                                size={sliderSize}
                            />
                            <Text>Fat</Text>
                            <Text>{65}g goal</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <View>
                            <Text>Breakfast</Text>
                            <Text>Calories Taken</Text>
                        </View>
                        <Plus />
                    </View>
                    <View style={{ backgroundColor: '#f9fafb', padding: 7, alignItems: 'center' }}>
                        <Text>Specific meal  card placeholder</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <View>
                            <Text>Lunch</Text>
                            <Text>Calories Taken</Text>
                        </View>
                        <Plus />
                    </View>
                    <View style={{ backgroundColor: '#f9fafb', padding: 7, alignItems: 'center' }}>
                        <Text>Specific meal  card placeholder</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <View>
                            <Text>Dinner</Text>
                            <Text>Calories Taken</Text>
                        </View>
                        <Plus />
                    </View>
                    <View style={{ backgroundColor: '#f9fafb', padding: 7, alignItems: 'center' }}>
                        <Text>Specific meal  card placeholder</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <View>
                            <Text>Snacks</Text>
                            <Text>Calories Taken</Text>
                        </View>
                        <Plus />
                    </View>
                    <View style={{ backgroundColor: '#f9fafb', padding: 7, alignItems: 'center' }}>
                        <Text>Specific meal  card placeholder</Text>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: '#f9fafb',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 10,
                    }}
                >
                    <View
                        style={[
                            styles.card,
                            {
                                flex: 1,
                            },
                        ]}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 6,
                                marginBottom: 6,
                            }}
                        >
                            <Droplet />
                            <Text style={{ fontWeight: '600' }}>Water</Text>
                        </View>
                        <Text style={{ fontSize: 12 }}>Consumption ratio</Text>
                        <Text style={{ fontSize: 12 }}>Consumption scale</Text>
                    </View>
                    <View
                        style={[
                            styles.card,
                            {
                                flex: 1,
                            },
                        ]}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 6,
                                marginBottom: 6,
                            }}
                        >
                            <Weight />
                            <Text style={{ fontWeight: '600' }}>Weight</Text>
                        </View>
                        <Text style={{ fontSize: 10 }}>Current weight placeholder</Text>
                        <Text style={{ fontSize: 10 }}>Weight lost placeholder</Text>
                    </View>
                </View>
            </ScrollView>
            <SafeAreaView style={styles.footer}>
                <House />
                <Book />
                <TrendingUp />
                <User />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
        alignItems: 'center',
    },
    head: {
        position: 'static',
    },
    body: {
        gap: 10,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10
    },
    footer: {
        position: 'static',
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },
});
