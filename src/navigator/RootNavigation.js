import * as React from 'react'
import { StackActions } from '@react-navigation/native'

export const isReadyRef = React.createRef()

export const navigationRef = React.createRef()

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params)
  } else {
    console.log('not ready')
  }
}

export function push(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.push(name, params))
  } else {
    console.log('not ready')
  }
}

export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack()
  } else {
    console.log('not ready')
  }
}
