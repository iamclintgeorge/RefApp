import React from "react";
import { View, Text, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { Wcf } from "../content/Confessions/wcf";
import { Belgic } from "../content/Confessions/belgic";
import { Codort } from "../content/Confessions/codort";

// Define type for the route params
type ConfessionScreenRouteProp = RouteProp<{ 
  params: { 
    itemName: string; 
  };
}, 'params'>;

interface ConfessionScreenProps {
  route: ConfessionScreenRouteProp;
}

const ConfessionScreen = ({ route }: ConfessionScreenProps) => {
  const {itemName} = route.params;

  const ContentMap:any = {
    'Westminster Confessions' : Wcf,
    'Belgic Confessions' : Belgic,
    'Canons of Dort' : Codort,
  }

  const titlename = ContentMap[itemName];



  return (
    <ScrollView>
      <Text>{titlename.Metadata.Title}</Text>
      {titlename.Data.map((chapter: any, chapterIndex: number) => (
        <View key={chapterIndex}>
          <Text>Chapter {chapter.Chapter}</Text>
          {chapter.Sections.map((section: any, sectionIndex: number) => (
            <View key={sectionIndex}>
              <Text>{section.Content}</Text>
              {section.Proofs && section.Proofs.length > 0 && (
                <View>
                  <Text>Proofs:</Text>
                  {section.Proofs.map((proof: any, proofIndex: number) => (
                    <Text key={proofIndex}>
                      {proof.References.join(", ")}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default ConfessionScreen;
