import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { IconAnt } from '../assets/vectorIcons'
import * as RootNavigation from '../navigator/RootNavigation'

const Header = props => {
  const { title } = props
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <IconAnt
          name="back"
          color="white"
          size={24}
          onPress={() => {
            RootNavigation.goBack()
          }}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.back} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a1265',
    height: 80,
    paddingTop: 30,
    flexDirection: 'row',
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textAlignVertical: 'center',
  },
})

export default Header
