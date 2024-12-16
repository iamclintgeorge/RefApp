import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Optioncards from "../components/optioncards";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
      <>
      <StatusBar backgroundColor="#0a0a0a" barStyle="light-content">
      </StatusBar>
      <SafeAreaView style={styles.safeContainer}>
        <ScrollView>
      <Text style={styles.title}>HOME</Text>
          <View       
          style={styles.container}>
            <Optioncards title={"CATECHISMS"} content={["Westminster Short Catechism", "Westminster Larger Catechism", "Heidelberg Catechism"]}/>
            <Optioncards title={"CREEDS"} content={["Apostles Creed", "Nicene Creed", "Athanasian Creed", "Chalcedonian Creed"]}/>
            <Optioncards title={"CONFESSIONS"} content={["Westminster Confessions", "Belgic Confessions", "Canons of Dort"]}/>
            <Optioncards title={"DOCTRINE OF GRACE"} content={[]}/>
            <Optioncards title={"FIVE SOLAS"} content={[]}/>
            <Optioncards title={"COVENANT THEOLOGY"} content={[]}/>
            <Optioncards title={"MORE"} content={[]}/>
          </View>
        </ScrollView>
        </SafeAreaView>
        </>
      );
    }

    const styles = StyleSheet.create({
      safeContainer: {
        flex: 1,
        backgroundColor: "#0a0a0a"
      },
      title:{
        color: "white",
        fontWeight: "400",
        textAlign: "center",
        fontSize: 18,
        marginBottom: 50,
        marginTop: 40,
      },
      container: {
        backgroundColor: "#202020",
        width:"92%",
        marginLeft: "4%",
        height: "auto",
        borderRadius:20,
        paddingTop: 20,
        paddingBottom: 50,
      },
    });
    