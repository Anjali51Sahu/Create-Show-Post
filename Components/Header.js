import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header(){
    return(
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Feed</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    headerContainer:{
        height:50,
        backgroundColor:'coral',
        justifyContent: 'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:20,
        fontWeight: "bold"
    }
  })