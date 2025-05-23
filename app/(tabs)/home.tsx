import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { styles } from '../../styles/auth.styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <Link href="/notification" style={{ color: "grey" }}>Feed screen in tabs</Link>

    </View>
  )
}