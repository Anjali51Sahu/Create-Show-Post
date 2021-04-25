import React, { useState, useEffect } from 'react';
import { FlatList,SafeAreaView, ScrollView ,StyleSheet,Text,TextInput,TouchableOpacity,Alert, View} from 'react-native';
import Header from '../Components/Header';
import ShowPost from '../Components/ShowPost';
import PostService from '../Services/postService'

export default function FeedScreen() {
  const [post,setPost] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  useEffect(()=>{
    fetchPost();
    },[]);

  const fetchPost=()=>{
    PostService.getAllPosts().then(
      post => setPost(post.POst))
  }

  const addPost=()=>{
      var post = 
      {
          Body:body,
          Title:title
      }
      PostService.createPost(post)
      .then(()=>{
        fetchPost();
        Alert.alert("New post added to feed")
      })
      .catch((error)=>Alert.alert(error));        
  }

  return (
    <View>
      <Header/>
      <Text>What's in your mind today?</Text>
      <TextInput 
              value={title}
              onChangeText={setTitle}
              placeholder={'Post\'s Title'} 
              style={styles.postTitle}/>
          <TextInput 
              placeholder={'Post\'s Body'}
              value={body}
              onChangeText={setBody}
              style={styles.postBody}/>

      <TouchableOpacity style={styles.addPostButton} onPress={addPost}>
          <Text>Add new post</Text>
      </TouchableOpacity>
    <View>
      <FlatList
        data={post}
        renderItem={({item})=> <ShowPost post={item}/>}
      />
      </View>
      </View>
  );}

const styles = StyleSheet.create({
    addPostButton:{
        borderRadius:10,
        display:'flex',
        padding:5,
        margin:10,
        backgroundColor:'lightblue',
        alignSelf:"flex-start"
    },
    postTitle:{
        borderRadius:10,
        borderWidth:2,
        margin:5,
        padding:5
    },
    postBody:{
        borderRadius:10,
        borderWidth:2,
        margin:5,
        height:100,
        padding:10
    }
})
