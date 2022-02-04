import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Header from './components/header'
import Content from './components/content'

let customFonts = {
  'SigmarOne-Regular': require('./assets/fonts/SigmarOne-Regular.ttf'),

};

export default class App extends React.Component
{
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync()
  {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount()
  {
    this._loadFontsAsync();
  }

  render()
  {
    if (!this.state.fontsLoaded)
    {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        {/*Header */}
        <Header />

        <View style={styles.content}>
          {/*Content */}
          <Content />

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112D32',
  },
  content: {
    padding: 40,
    flex: 1,

  },

});
