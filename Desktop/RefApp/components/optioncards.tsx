import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface OptioncardsProps {
    title: string;
  }

export default function Optioncards({ title }: OptioncardsProps) {
  return (
    <View>
          <Text style={{
            color:"white",
            fontWeight:"400",
            fontSize:15,
            letterSpacing:1.5,
            marginTop:55,
            marginLeft:35
          }}>
            {title}
          </Text>
        </View>
  )
}