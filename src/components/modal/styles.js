import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        paddingVertical: 20,
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#ffbd46'
      },
      detailContainer: {
        margin: 40,
        backgroundColor: '#ffbd46',
        textAlignVertical:'center',
        padding: 10,
        borderRadius: 10,
        elevation: 20,
      },
      detailMessage: {
        fontSize: 20,
        color: '#212121',
      },
      selectedEvent: {
        fontSize: 26,
        color: '#212121',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop: 40,
        width: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
});