import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Animation from "lottie-react-native";

//import anim from "./assets/soda_loader.json";
import anim from "./assets/load_complete.json";

class App extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My first Lottie Animations O_O</Text>
        <View>
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 120,
              height: 120
            }}
            loop={true}
            source={anim}
          />
        </View>

      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#A6207E",
    backgroundColor: "rgb(95, 114, 188)"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  }
});
