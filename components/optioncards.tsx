import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface OptioncardsProps {
    title: string;
    content: string[];
  }

export default function Optioncards({ title, content }: OptioncardsProps) {
  const [show, setShow] = useState(false);
  const setState = () =>{
    setShow(prevState => !prevState);
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.optionsdiv} onPress={setState}>
          <Text style={styles.title}>
            {title}
          </Text>
          <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              color={"#727272"}
            />
      </TouchableOpacity>
      {show && <FlatList
        data={content}  // The data array (items)
        renderItem={({ item }) => (
          <View>
            <Text style={styles.subtitle}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}  // Use index as key if no unique identifier is present
      />}
        </View>
  )
}

const styles = StyleSheet.create({
card:{
  marginHorizontal:"5%",
  borderBottomWidth: 0.2,
  borderColor: "#A2A2A2",
},
title:{
  color:"white",
  fontWeight:"400",
  fontSize:15,
  letterSpacing:1.5,
  flex: 1,
},
optionsdiv:{
  flexDirection: "row",
  paddingLeft: "10%",
  paddingBottom: 25,
  paddingTop: 35,
  paddingRight: "5%",
},
subtitle:{
  color:"white",
  fontWeight:"300",
  fontSize:15,
  letterSpacing:1.5,
  flex: 1,
  marginLeft: "9%",
  marginBottom: 10,
},
})