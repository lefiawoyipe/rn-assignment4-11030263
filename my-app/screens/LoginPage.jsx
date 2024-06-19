import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';


import appleLogo from '../Images/cib_apple.png';
import facebookLogo from '../Images/ion_logo-facebook.png';
import googleLogo from '../Images/grommet-icons_google.png';

const LoginPage = ({ navigation }) => {
  const handleLogin = () => {
    // Handle authentication logic (e.g., API calls, validation)
    // On successful login, navigate to Home screen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Text elements */}
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Jobizz</Text>
        <Text style={styles.subHeaderText}>Welcome Back</Text>
        <Text style={styles.infoText}>Let's log in. Apply to Jobs!</Text>
      </View>

      {/* TextInputs for username and password */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        secureTextEntry
      />

      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />
       
      {/* Or continue with text */}
      <Text style={styles.orText}>- Or continue with -</Text>

      {/* Images */}
      <View style={styles.imageContainer}>
        <Image source={appleLogo} style={styles.logo} />
        <Image source={facebookLogo} style={styles.logo} />
        <Image source={googleLogo} style={styles.logo} />
      </View>

      {/* Haven't an account text */}
      <Text style={styles.signupText}>Haven't an account? Register</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    alignSelf: 'flex-start', 
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    color: '#666',
  },
  signupText: {
    fontSize: 14,
    color: '#007bff',
    marginTop:20,
  },
});

export default LoginPage;
