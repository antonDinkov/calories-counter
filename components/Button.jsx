import { Pressable, StyleSheet, Text } from "react-native";

export default function Button(props) {
    return (
        <Pressable style={[styles.button, { backgroundColor: props.backGroundBtn }]} onPress={() => {
            if (props.close) props.close();
            if (props.onPress) props.onPress();
        }}>
            <Text style={{ color: props.textBtn || 'black' }}>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 2,
        width: 100,
        alignItems: 'center',
    },
})