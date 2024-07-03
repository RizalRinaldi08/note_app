import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import CustomButton from '../components/customButton';
import NoteCard from './noteCard'; // Pastikan Anda mengimpor NoteCard yang benar

const Home = ({ noteList, setCurrentPage, updateNote, deleteNote }) => (
  <View style={styles.container}>
    <CustomButton
      backgroundColor="#DDD"
      color="#203239"
      text="Tambahkan Note"
      width="100%"
      onPress={() => setCurrentPage('add')}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard
          item={item}
          setCurrentPage={setCurrentPage}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      )}
      keyExtractor={(item) => item.id.toString()} // Ubah menjadi string karena id berupa number
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
});

export default Home;
