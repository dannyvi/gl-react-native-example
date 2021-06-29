import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import * as RootNavigation from '../navigator/RootNavigation'
import { IconAnt } from '../assets/vectorIcons'

function NavBar() {
  return (
    <View style={styles.fabContainer}>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('Home')}
        style={styles.fabButton}>
        <IconAnt name="home" size={18} color="#ff3e00" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('Three')}
        style={styles.fabButton}>
        <IconAnt name="heart" size={18} color="#ff3e00" />
        <Text style={styles.text}>Three</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => RootNavigation.push('Gl', { gl: 'Blue' })}
        style={styles.fabButton}>
        <IconAnt name="user" size={18} color="#ff3e00" />
        <Text style={styles.text}>GL</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('My')}
        style={styles.fabButton}>
        <IconAnt name="user" size={18} color="#ff3e00" />
        <Text style={styles.text}>My</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
  },
  fabContainer: {
    backgroundColor: '#2a1265',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  fabButton: {
    backgroundColor: '#2a1265',
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { color: 'white' },
})

export default NavBar
