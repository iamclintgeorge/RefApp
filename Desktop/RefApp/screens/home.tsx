import { View, Text } from 'react-native'
import React from 'react'
import Optioncards from "../components/optioncards";

export default function Home() {
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0A0A0A",
            padding:20
          }}
        >
          <View       
          style={{
            flex:1,
            backgroundColor: "#202020",
            width:350,
            borderRadius:20
          }}>
            <Optioncards title={"CATECHISMS"}/>
            <Optioncards title={"CREEDS"}/>
            <Optioncards title={"CONFESSIONS"}/>
            <Optioncards title={"DOCTRINE OF GRACE"}/>
            <Optioncards title={"FIVE SOLAS"}/>
            <Optioncards title={"COVENANT THEOLOGY"}/>
            <Optioncards title={"MORE"}/>
          </View>
        </View>
      );
    }
    