import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../../styles/auth.styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", textAlign: "center" }}>Home</Text>
      <Link href="/notification" style={ styles.appName}>Feed screen in tabs</Link>

    </View>
  )
}