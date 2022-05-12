import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({

    header: {
        width: '100%',
        heihgt: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },

    /* Styles for container classes */
    container: {
      flex: 1,
      padding: 35,
      margin: 15,  
      backgroundColor: '#fff',
    },

    Imagecontainer: {
        flex: 1,
        padding: 35,
        margin: 15,  
        backgroundColor: '#3939',
      },

    /* Styles for titleText classes */
    titleText: {
        fontSize: 40,
        textAlign: 'center',
        color: 'green',
        borderWidth: 5,
        borderColor: 'blue',
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        borderTopEndRadius: 100,
        borderTopStartRadius: 100,
        padding: 5,
        marginBottom: 20,
        borderStyle: 'dashed',
    },

    /* Styles for paragraph classes */
    paragraph: {
        marginVertical: 10,
        lineHeight: 25,
    },
    Image: {
        padding: 40,
        margin: 10,
        tintColor: 'gray',
        borderWidth: 5,
        borderColor: 'red',
        borderStyle: 'dashed',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        alignSelf: 'center'
    }
  });
  