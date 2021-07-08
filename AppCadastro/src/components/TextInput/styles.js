const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  button: {
    width: 62,
    height: 30,
    backgroundColor: "#B22222",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20
  
  },

  textInputContainer: {
    backgroundColor:"#000",
    color: "#fff",
    textDecorationStyle:'dashed'
  }
})