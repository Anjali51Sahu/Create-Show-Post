import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ShowPost(props){
    var post = props.post;    
    return (
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Text style={styles.titleText}>{post.Title}</Text>   
            <TouchableOpacity style={styles.editButton}>        
                <Icon name="edit"/>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.deleteButton} >
                <Icon name="remove"/>
            </TouchableOpacity>
        </View>
        <Text>{post.Body}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
 mainContainer:{
    borderColor:'black',
    borderWidth:2,
    borderRadius:15,
    padding:10,
    margin:10
 },
    container:{
    marginTop:10,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
 },
 titleText:{
     width:"60%",
     fontSize:15,
     fontWeight:'bold',
     flex:4
 },
 editButton:{
    borderRadius:10,
   width:'10%'
 },
 deleteButton:{
    borderRadius:10,
    width:"10%",
 },
 postBody:{
     height:100,
     fontSize:10
 }
})