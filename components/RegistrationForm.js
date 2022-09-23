import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const RegistrationForm = () => {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onClearButtonClicked = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  const onSignUpButtonClicked = () => {
    alert(
      `Are you sure those information are correct ? ${firstname} and ${email}`
    );
  };
  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Registration form</Text>
      <TextInput
        value={firstname}
        style={styles.textinput}
        placeholder="Enter your first name"
        onChangeText={(val) => setFirstName(val)}
      />
      <TextInput
        value={lastname}
        style={styles.textinput}
        placeholder="Enter your last name"
        onChangeText={(val) => setLastName(val)}
      />
      <TextInput
        value={email}
        style={styles.textinput}
        placeholder="Enter your email"
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        value={password}
        secureTextEntry={true}
        style={styles.textinput}
        placeholder="Enter your password"
        onChangeText={(val) => setPassword(val)}
      />

      <TouchableOpacity style={styles.button} onPress={onSignUpButtonClicked}>
        <Text style={styles.btntext}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onClearButtonClicked}>
        <Text style={styles.btntext}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  regform: {
    alignSelf: "stretch",
  },
  header: {
    color: "#fff",
    fontSize: 24,
    paddingBottom: 10,
    backgroundColor: "#199187",
    alignItems: "center",
    marginBottom: 40,
  },
  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#000",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#59cbbd",
    marginTop: 10,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RegistrationForm;
