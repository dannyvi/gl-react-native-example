import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import { connect } from '../utils/connect'
import Page from '../components/Page'
import * as RootNavigation from '../navigator/RootNavigation'

function ListView({ home }) {
  const list = ['Blue', 'Sdf', 'Tunnel', 'Triangle']
  return (
    <View style={styles.listContainer}>
      {list.map(x => (
        <Button
          titleStyle={styles.buttonTitle}
          title={x}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          key={x}
          onPress={() => {
            console.log('pushed', x)
            RootNavigation.push('Gl', { gl: x })
          }}
        />
      ))}
    </View>
  )
}

function HomeScreen({ home, dispatch }) {
  useEffect(() => {
    dispatch({
      type: 'home/currentUser',
    })
  }, [dispatch])

  return (
    <Page title="Home">
      <ListView home={home} />
    </Page>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2a1265',
    // padding: 20,
  },
  buttonTitle: {
    color: '#ff0',
  },
  buttonContainer: {
    margin: 5,
  },
  listContainer: {
    backgroundColor: '#205d40',
    color: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})

export default connect(({ home, loading }) => ({
  home,
  dataLoading: loading.effects['home/showList'],
}))(HomeScreen)
