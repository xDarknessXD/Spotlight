import { styles } from '@/styles/auth.styles'
import React from 'react'
import { Text, View } from 'react-native'

export default function create() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Create</Text>
    </View>
  )
}