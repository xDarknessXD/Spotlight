import { styles } from '@/styles/auth.styles';
import React from 'react';
import { Text, View } from 'react-native';

export default function Notification() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Notification Screen</Text>
    </View>
  );
}
