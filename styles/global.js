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
      fontSize: 24,
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

    homeContainer: {
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
    paddingTop: 100,
    textAlign: 'center',   
    fontWeight: 'bold',
    borderRadius: 20,
    fontSize: 19,
    letterSpacing: 1,
    },

    homeImages: {
      width: '100%',
      height: '20%',
      borderWidth: 3,
      borderColor: 'black',
      padding: 10,
      backgroundColor: 'gray'
    },


    /* Styles for Genre screen and Stack Navigator */

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

    genresBack: {
      backgroundColor: '#fff',
    },

    stackNav: {
      flex: 2,
      paddingVertical: 20,
      borderRadius: 60,
      borderColor: '#ececec',
      borderWidth: 5,
      textAlign: "center",
      padding: 5,
      margin: 5,
      marginBottom: 0,
      justifyContent: 'center',
      backgroundColor: '#fff'
    },

    button: {
      marginBottom: 10,
      padding: 2,
      borderWidth: 10,
      textAlign: "center",
      margin: 20,
      color: '#FFF',
      marginBottom: 0,
      justifyContent: 'center',
      backgroundColor: '#fff'
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

    /* Different contact styles in List */
    
    item: {
      backgroundColor: "#ececec",
      marginVertical: 3
    },
    header: {
      textAlign: 'center',
      color: 'black',
      padding: 25,
      fontWeight: '700',
      marginVertical: 7,
      fontSize: 21,
      backgroundColor: "#fff"
    },
    title: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 16
    },


    /* About screen styling */

    aboutText: {
      color: 'black',
      fontSize: 19,
      fontWeight: '500',
      textAlign: 'center',
      padding: 27,
      borderWidth: 3,
      backgroundColor: '#ececec'
    },

    aboutContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingTop: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      flexWrap: 'wrap'
    },


    /* Policy screen styling */
    
    policyContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: "column",
      flexWrap: 'wrap'
    },

    policyHeader: {
      paddingTop: 30,
      textAlign: 'center',
      paddingBottom: 30,
      fontSize: 20,
      fontWeight: 'bold'
    },

    policyList: {
      paddingTop: 10,
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center',
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRadius: 5,
      backgroundColor: '#ececec'
    },
    policyListTop: {
      paddingTop: 10,
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center',
      borderTopWidth: 2,
      borderBottomWidth: 1,
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderRadius: 5,
      backgroundColor: '#ececec'
    },
    policyListBot: {
      paddingTop: 10,
      fontSize: 17,
      fontWeight: '600',
      textAlign: 'center',
      borderTopWidth: 1,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderLeftWidth: 2,
      borderRadius: 5,
      backgroundColor: '#ececec'
    },

    policyFooter: {
      textAlign: 'center',
      paddingTop: 40,
      paddingBottom: 50,
      fontSize: 19,
    },


    /* Styles for paragraph classes */
    paragraph: {
        marginVertical: 10,
        lineHeight: 25,
    },

  });
  