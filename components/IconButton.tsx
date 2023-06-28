import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

type IconProps = {
    icon: React.ComponentProps<typeof EvilIcons>['name'];
    text?: string | number;
}

export default function IconButton({ icon, text }: IconProps) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <EvilIcons name={icon} size={22} color="gray" />
            <Text style={{ fontSize: 12, color: 'gray' }}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})