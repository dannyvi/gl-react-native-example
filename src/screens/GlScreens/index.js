import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Page from '../../components/Page'
import Blue from './HelloBlue'

function ListView() {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.text}>GL</Text>
    </View>
  )
}

export default function GlScreen({ home, dispatch }) {
  return (
    <Page title="GLPages">
      {/*<ListView home={home} />*/}
      <Blue blue={0.8} />
      {/*<View><Text>Vi</Text></View>*/}
    </Page>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'lightyellow',
    padding: 2,
  },
  listContainer: {
    backgroundColor: '#205d40',
    color: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
})
