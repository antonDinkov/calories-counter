import { StatusBar } from 'expo-status-bar';
import { Book, Droplet, House, Plus, TrendingUp, User, Weight } from 'lucide-react-native';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Macronutrients from './components/Macronutrents';
import AddFood from './components/AddFood';
import MealHolder from './components/MealHolder';

export default function App() {
    const { width } = Dimensions.get('window');
    const sliderSize = width / 5;
    const [caloriesLimit, setCaloriesLimit] = useState(2000);
    const [nutritionData, setNutritionData] = useState({});
    const [breakfastCounter, setBreakfastCounter] = useState([]);
    const [lunchCounter, setLunchCounter] = useState([]);
    const [dinnerCounter, setDinnerCounter] = useState([]);
    const [snacksCounter, setSnacksCounter] = useState([]);

    const nutritionDataHandler = (data, type) => {
        setNutritionData(data);
        if (type.toLowerCase() == 'breakfast') {
            setBreakfastCounter(oldData => [...oldData, data]);
        } else if (type.toLowerCase() == 'lunch') {
            setLunchCounter(oldData => [...oldData, data]);
        } else if (type.toLowerCase() == 'dinner') {
            setDinnerCounter(oldData => [...oldData, data]);
        } else if (type.toLowerCase() == 'snacks') {
            setSnacksCounter(oldData => [...oldData, data]);
        } else {
            return;
        }
        caloriesHandler(data, 'down')
        const protein = Number(data.protein);
        setConsumedProtein(prev => (prev + protein >= goalProtein ? prev + protein : goalProtein));
        const carbs = Number(data.carbs);
        setConsumedCarbs(prev => prev + carbs);
        const fats = Number(data.fat);
        setConsumedFat(prev => prev + fats);
    }
    const mealRemoveHandler = (type, i, data) => {
        if (type.toLowerCase() == 'breakfast') {
            setBreakfastCounter(oldData => oldData.filter((_, index) => index !== i));
        } else if (type.toLowerCase() == 'lunch') {
            setLunchCounter(oldData => oldData.filter((_, index) => index !== i));
        } else if (type.toLowerCase() == 'dinner') {
            setDinnerCounter(oldData => oldData.filter((_, index) => index !== i));
        } else if (type.toLowerCase() == 'snacks') {
            setSnacksCounter(oldData => oldData.filter((_, index) => index !== i));
        } else {
            return;
        }

        caloriesHandler(data, 'up')
    }
    const caloriesHandler = (data, direction) => {
        const caloriesNumber = Number(data.calories);
        if (direction == 'up') {
            if (caloriesNumber + caloriesLimit > 2000) {
                setCaloriesLimit(2000);
                const protein = Number(data.protein);
                setConsumedProtein(prev => (prev - protein >= 0 ? prev - protein : 0));
                const carbs = Number(data.carbs);
                setConsumedCarbs(prev => prev - carbs);
                const fats = Number(data.fat);
                setConsumedFat(prev => prev - fats);
            } else {
                setCaloriesLimit(oldAmmount => oldAmmount + caloriesNumber);
                const protein = Number(data.protein);
                setConsumedProtein(prev => prev - protein);
                const carbs = Number(data.carbs);
                setConsumedCarbs(prev => prev - carbs);
                const fats = Number(data.fat);
                setConsumedFat(prev => prev - fats);
            }
        } else if (direction == 'down') {
            if (caloriesNumber > caloriesLimit) {
                setCaloriesLimit(0);
            } else {
                setCaloriesLimit(oldAmmount => oldAmmount - caloriesNumber);
            }
        }
    }


    const [consumedProtein, setConsumedProtein] = useState(0);
    const [goalProtein, setGoalProtein] = useState(150);

    const [consumedCarbs, setConsumedCarbs] = useState(0);
    const [goalCarbs, setGoalCarbs] = useState(200);

    const [consumedFat, setConsumedFat] = useState(0);
    const [goalFat, setGoalFat] = useState(65);

    const [modalView, setModalView] = useState(false);
    const toggleModal = () => {
        setModalView(prevView => !prevView);
    }

    const [mealTime, setMealTime] = useState('');
    const mealTimeSetter = (time) => {
        setMealTime(time);
    }

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
                <View style={[styles.card, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{caloriesLimit}</Text>
                    <Text>Calories Remaining</Text>
                </View>
                <View style={styles.card}>
                    <Macronutrients
                        consumedProtein={consumedProtein}
                        goalProtein={goalProtein}
                        consumedCarbs={consumedCarbs}
                        goalCarbs={goalCarbs}
                        consumedFat={consumedFat}
                        goalFat={goalFat}
                        sliderSize={sliderSize}
                    />
                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <View>
                            <Text>Breakfast</Text>
                            <Text>Calories Taken</Text>
                        </View>
                        <Pressable onPress={() => { mealTimeSetter('Breakfast'); toggleModal() }} hitSlop={10}>
                            <Plus />
                        </Pressable>
                        <AddFood modalView={modalView} toggleModal={toggleModal} mealTime={mealTime} nutriDataExtractor={nutritionDataHandler} />
                    </View>
                    {breakfastCounter.length > 0 && breakfastCounter.map((meal, index) => <MealHolder mealTime={'Breakfast'} index={index} key={index} data={meal} removeHandler={mealRemoveHandler} />)}

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
