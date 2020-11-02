import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApplicationProvider, IconRegistry, Layout, Icon, Text, TopNavigation, TopNavigationAction, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { StyleSheet, SafeAreaView } from "react-native";

import Game from "./components/Game";
import AddPoints from "./components/AddPoints";

import Header from "./components/Header";


const Stack = createStackNavigator();

const Test = () => <Text>TEST§</Text>

function App() {

  const [theme, setTheme] = React.useState("light");
  const themeHook = useTheme();


  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[theme] }}>

        <SafeAreaView style={{ backgroundColor: "red" }}>
          <Layout style={styles.root}>

            <NavigationContainer>

              <Stack.Navigator screenOptions={{ header: Header }}>
                <Stack.Screen name="Game" component={Game} />
                <Stack.Screen name="_addPoints" component={AddPoints} />
                <Stack.Screen name="test" component={Test} />
              </Stack.Navigator>

            </NavigationContainer>

          </Layout>
        </SafeAreaView>

      </ApplicationProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexGrow: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
    padding: 10
  }
})

export default App;