import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FA9A',
        // backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: "#fff",
        fontSize: 23,

    },

    input: {
        backgroundColor: "white",
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50
    },

    logo: {
        height: 200,
        width: 200,
    },

    button_submit: {
        backgroundColor: "white",
        height: 30,
        width: 100,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: "center",
    },
    nav:{
        marginBottom: 20,
    },

    option:{
        backgroundColor:"#fff",
        borderRadius:50,
        margin:10,
    },
    
    viewOption:{
        display:"flex",
        flexDirection:"row"
    }

});

// module.exports = styles
export default styles;