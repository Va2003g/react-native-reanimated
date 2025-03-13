import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppleInvitesAnimation from '@/components/AppleInvitesAnimation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const One = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppleInvitesAnimation />
    </GestureHandlerRootView>
  )
}

export default One;

const styles = StyleSheet.create({})