import { Image, StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'

const user = {
  id: 'u1',
  username: 'alex',
  name: 'Alex',
  image:
    'https://randomuser.me/api/portraits/men/68.jpg',
}

export default function NewTweet() {
  const [text, setText] = useState('');
  const navigation = useRouter();

  const onTweetPress = () => {
    console.log("posting", text);
    setText('');
    navigation.back();
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Link href={'../'} style={{ fontSize: 18 }}>Abort</Link>
        <Pressable onPress={onTweetPress} style={styles.button}>
          <Text style={styles.buttonText}>Tweet</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <TextInput
          placeholder="What's happing"
          multiline
          numberOfLines={5}
          style={{ flex: 1 }}
          value={text}
          onChangeText={setText}
        />
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#1C9BF0',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row'
  },
  image: {
    width: 1,
    aspectRatio: 1,
    borderRadius: 50
  }
})