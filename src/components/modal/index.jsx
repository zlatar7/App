import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete}) => {
  return (
    <Modal visible={isVisible} animationType={animationType}>
    <View style={styles.container}>
      <Text style={styles.title}>DETAILS</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailMessage}>Do you want to delete?</Text>
        <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title='Cancel'
          color='#0EA300'
          onPress={onCancel}
          
        />
        <Button 
        title='Delete'
        color='#0EA300'
        onPress={() => onDelete(selectedEvent.id)}
        />
      </View>
    </View>
    </Modal>
  )
};

export default CustomModal;