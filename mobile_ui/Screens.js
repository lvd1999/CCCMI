import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from './context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export const SignIn = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push('CreateAccount')}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const {signUp} = React.useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};

export const Profile = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
    </ScreenContainer>
  );
};

export const Search = ({navigation}) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => navigation.push('Search2')} />
    <Button
      title="React Native School"
      onPress={() => {
        navigation.navigate('Home', {
          screen: 'Details',
          params: {name: 'React Native School'},
        });
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

//use route to get parameter
export const Details = ({route}) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {/* get name by using route and Text*/}
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const Settings = () => (
  <ScreenContainer>
    <Text>Settings Screen</Text>
  </ScreenContainer>
);