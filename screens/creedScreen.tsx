import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Apostle } from "../content/Creeds/apostles";
import { Nicene } from "../content/Creeds/nicene";
import { Athanasian } from "../content/Creeds/athanasian";
import { RouteProp } from "@react-navigation/native";
import { Chalcedonian } from "../content/Creeds/chalcedonian";

// Define type for the route params
type CreedScreenRouteProp = RouteProp<{ 
  params: { 
    itemName: string; 
  };
}, 'params'>;

interface CreedScreenProps {
  route: CreedScreenRouteProp;
}

const CreedScreen = ({ route }: CreedScreenProps) => {
  const {itemName} = route.params;

  const ContentMap:any = {
    'Apostles Creed' : Apostle,
    'Nicene Creed' : Nicene,
    'Athanasian Creed' : Athanasian,
    'Chalcedonian Creed': Chalcedonian,
  }

  const titlename = ContentMap[itemName];



  return (
    <ScrollView>
      <Text>{titlename.Metadata.Title}</Text>
      <Text>{titlename.Data.Content}</Text>
    </ScrollView>
  );
};

export default CreedScreen;
