import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Home Main List Screen</Text>
      <Button title="React Native by Example" onPress={() => alert("todo!")} />
      <Button title="React Native School" onPress={() => alert("todo!")} />
      <Button title="Drawer" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};

export const Profile = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
    </ScreenContainer>
  );
};

export const CreateAccount = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Create account Screen</Text>
    </ScreenContainer>
  );
};

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text> Search Screen</Text>
    <Button title="Search 2" onPress={() => alert("todo!")} />
    <Button title="React serach school" onPress={() => alert("todo!")} />
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Sign in Screen</Text>
      <Button title="Sign in" onPress={() => alert("todo!")} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};
