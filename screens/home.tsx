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
            <Optioncards title={"CATECHISMS"} content={["Westminster Short Catechism", "Westminster Larger Catechism", "Heidelberg Catechism"]} category={1}/>
            <Optioncards title={"CREEDS"} content={["Apostles Creed", "Nicene Creed", "Athanasian Creed", "Chalcedonian Creed"]} category={2}/>
            <Optioncards title={"CONFESSIONS"} content={["Westminster Confessions", "Belgic Confessions", "Canons of Dort"]} category={3}/>
            <Optioncards title={"DOCTRINE OF GRACE"} content={[]} category={4}/>
            <Optioncards title={"FIVE SOLAS"} content={[]} category={5}/>
            <Optioncards title={"COVENANT THEOLOGY"} content={[]} category={6}/>
          </View>
        </ScrollView>
        </SafeAreaView>
        </>
      );
    }

    const styles = StyleSheet.create({
      safeContainer: {
        flex: 1,
        backgroundColor: "black"
      },
      title:{
        color: "white",
        fontWeight: "400",
        textAlign: "center",
        fontSize: 18,
        marginBottom: 70,
        marginTop: 40,
      },
      container: {
        backgroundColor: "#151515",
        width:"92%",
        marginLeft: "4%",
        height: "auto",
        borderRadius:20,
        paddingTop: 20,
        paddingBottom: 50,
      },
    });
    