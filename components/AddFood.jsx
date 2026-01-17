import { Modal, Text, View, StyleSheet, Pressable } from "react-native";

export default function AddFood(props) {
  return (
    <Modal
      visible={props.modalView}
      transparent
      animationType="fade"
      onRequestClose={props.toggleModal}
    >
      <Pressable style={styles.overlay} onPress={props.toggleModal}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>This is the modal</Text>
        </View>
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
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
