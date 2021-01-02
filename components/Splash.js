import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

export class Splash extends Component {
  goToScreen(routeName) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.goToScreen("Root");
      },
      2000,
      this
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.text}> Splash Screen </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efef21",
  },
  text: {
    fontSize: 22,
  },
});

export default Splash;
