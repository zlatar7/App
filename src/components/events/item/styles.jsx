import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        width: '100%' ,
        backgroundColor: '#ffbd46',
        borderRadius: 5,
        marginVertical: 5,
        elevation: 10
    },
    item: {
        textAlignVertical: 'center',
        marginHorizontal: 10,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        width:'85%',
    },
    item2:{
        textAlignVertical: 'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        width:'15%'
    }
});