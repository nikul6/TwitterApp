import { FlatList, Pressable, StyleSheet, View } from 'react-native';

import tweets from '../../../../assets/data/tweets';
import Tweet from '../../../../components/Tweet';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Link href={'/new-tweet'} asChild>
        <AntDesign name="plus" size={24} color="#fff" style={styles.floatingButton} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor:'green'
  },
  floatingButton: {
    backgroundColor: '#1C9BF0',
    // backgroundColor:'green',
    borderRadius: 25,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden'
  }
});
