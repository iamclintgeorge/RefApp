import React from "react";
import { ScrollView, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App"; // Import RootStackParamList from App.tsx
import { Wsc } from "../content/Catechisms/wsc";
import { Wlc } from "../content/Catechisms/wlc";
import { Heidelberg } from "../content/Catechisms/heidelberg";

// Define type for the route params
type CatechismScreenRouteProp = RouteProp<
  RootStackParamList,
  "CatechismScreen"
>;

interface CatechismScreenProps {
  route: CatechismScreenRouteProp;
}

// Typing the ContentMap
interface ContentMapType {
  [key: string]: {
    Metadata: {
      Title: string;
    };
    Data: {
      Question: string;
      Answer: string;
    }[];
  };
}

const CatechismScreen = ({ route }: CatechismScreenProps) => {
  const { itemName } = route.params;

  // Use the typed ContentMap
  const ContentMap: ContentMapType = {
    "Westminster Short Catechism": Wsc,
    "Westminster Larger Catechism": Wlc,
    "Heidelberg Catechism": Heidelberg,
  };

  const titlename = ContentMap[itemName];

  return (
    <ScrollView>
      <Text>{titlename.Metadata.Title}</Text>
      {titlename.Data.map((paragraph, index) => (
        <Text key={index}>
          {paragraph.Question} {"\n"}
          {paragraph.Answer} {"\n"}
        </Text>
      ))}
    </ScrollView>
  );
};

export default CatechismScreen;
