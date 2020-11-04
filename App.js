import React from 'react';
import "react-native-gesture-handler";
import * as eva from '@eva-design/eva';
import { SafeAreaView } from "react-native";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout, withStyles } from '@ui-kitten/components';
import Navigator from "./components/Navigator";

const App = () => {
  const [theme, setTheme] = React.useState("dark");

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[theme] }}>
        <Main />
      </ApplicationProvider>
    </React.Fragment>
  )
}

const Main = withStyles(props => (
  <SafeAreaView style={[props.eva.style.safeAreaView, props.style]}>
    <Layout style={props.eva.style.root}>

      <Navigator />

    </Layout>
  </SafeAreaView>
), theme => ({
  safeAreaView: {
    backgroundColor: theme["background-basic-color-1"]
  },
  root: {
    height: "100%",
  }
}));

export default App;