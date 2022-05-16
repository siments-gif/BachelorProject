import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({


      /* Styles for header components */
    
    headerContainer: {
      flex: 1,
      
    },
  
    header: {
      width: '100%',
      height: '100%',
      paddingTop: 22,
      paddingLeft: 22,
      position: 'absolute',
      backgroundColor: '#c9c9c9',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
    },

    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      letterSpacing: 1,
    },

    headerSubText: {
      fontWeight: 'normal',
      fontSize: 16,
      color: '#c0c0c0',
      letterSpacing: 1,
    },

    /* Styles for content on Home screen */
    contentContainer: {
      width: '100%',
      height: '89%',
      backgroundColor: '#fff',
      paddingBottom: 5,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },

    homeImage: {
      width: '100%',
      height: '25%',
      borderWidth: 3,
      borderColor: 'black',
      padding: 10,
      backgroundColor: 'gray'
    },

      /* Styles for titleText classes */
    titleText: {
        fontSize: 40,
        textAlign: 'center',
        color: 'green',
        borderWidth: 5,
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
        borderTopEndRadius: 100,
        borderTopStartRadius: 100,
        padding: 5,
        marginBottom: 20,
        borderStyle: 'dashed',
    },

    /* Styles for contactInfo class */
    contactInfo: {
      color: 'blue',
      fontSize: 20,
      fontWeight: 'normal',
      textAlign: 'center'
    },

    /* Styles for paragraph classes */
    paragraph: {
        marginVertical: 10,
        lineHeight: 25,
    },
  });
  