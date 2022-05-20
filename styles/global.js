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
      justifyContent: 'space-evenly',
      paddingVertical: 50,
      letterSpacing: 0,
      textAlign: 'center'
    },

    headerSubText: {
      fontWeight: 'normal',
      fontSize: 16,
      color: '#c0c0c0',
      letterSpacing: 1,
    },

    /* Styles for Home screen */

    container: {
      flex: 1
    },

    contentContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#ececec',
      paddingBottom: 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      flexWrap: 'wrap'
    },

    homeText: {
    paddingTop: 25,   
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 3,
    },

    homeImages: {
      width: '100%',
      height: '20%',
      borderWidth: 3,
      borderColor: 'black',
      padding: 10,
      backgroundColor: 'gray'
    },

    genresContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      paddingHorizontal: 50,
      paddingTop: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      flexWrap: 'wrap'
    },

    stackNav: {
      flex: 1,
      textAlign: "center",
      padding: 20,
      justifyContent: 'center'
    },

    button: {
      marginBottom: 30,
      padding: 10,
      backgroundColor: 'red'
    },
    
    item: {
      marginTop: 24,
      padding: 30,
      fontSize: 20,
    },

    itemImages: {
      width: '100%',
      height: '100%',
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
      color: 'black',
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'left',
      paddingBottom: 70,
    },

    contactContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#ececec',
      paddingHorizontal: 20,
      paddingTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      flexWrap: 'wrap'
    },

    items: {
      paddingBottom: 20,
    },


    aboutText: {
      color: 'black',
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'left',
      paddingBottom: 70,
    },

    container: {
      flex: 1,
      marginHorizontal: 16
    },
    item: {
      backgroundColor: "#ececec",
      padding: 20,
      marginVertical: 1
    },
    header: {
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 16,
      backgroundColor: "#ececec"
    },
    title: {
      textAlign: 'center',
      fontSize: 14
    },

    /* Styles for paragraph classes */
    paragraph: {
        marginVertical: 10,
        lineHeight: 25,
    },
  });
  