import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TweetType } from '../types'
import { Entypo } from '@expo/vector-icons';

type TweetProps = {
    tweet: TweetType;
}

export default function Tweet({ tweet }: TweetProps) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
            <View style={styles.mainConatiner}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>{tweet.user.username} · 3h</Text>
                    <Entypo name="dots-three-horizontal" size={16} color="gray" style={{ marginLeft: 'auto' }} />
                </View>
                <Text style={styles.content}>{tweet.content}</Text>
                {tweet.image && <Image source={{ uri: tweet.image }} style={styles.image} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        // backgroundColor:'green'
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    mainConatiner: {
        marginLeft: 10,
        flex: 1
    },
    name: {
        fontWeight: '600'
    },
    username: {
        color: 'gray',
        marginLeft: 5
    },
    content: {
        lineHeight: 20,
        marginTop: 1
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginTop: 10,
        borderRadius: 15
    }
})