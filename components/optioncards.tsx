import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

interface OptioncardsProps {
    title: string;
    content: string[];
    category: any;
  }

export default function Optioncards({ title, content, category }: OptioncardsProps) {
  const [show, setShow] = useState(false);
  const setState = () =>{
    setShow(prevState => !prevState);
  }
  const navigation:any = useNavigation();

  const handleNavigation = (item:any) => {
    const screenMap:any = {
      1: 'CatechismScreen', // Catechism
      2: 'CreedScreen', // Creed
      3: 'WcfScreen', // Confession
      4: 'TulipScreen', // Confession
      5: 'SolaScreen', // Confession
      6: 'CtScreen', // Confession
    };
  
    const screen:string = screenMap[category]; // Get the corresponding screen based on categoryType
  
    if (screen) {
      navigation.navigate(screen, { itemName: item }); // Navigate to the correct screen
    } else {
      console.log('Unknown category type');
    }
  };

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
          <TouchableOpacity onPress={() => handleNavigation(item)}>
            <Text style={styles.subtitle}>{item}</Text>
          </TouchableOpacity>
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