import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';

const NoteCard = ({ item, setCurrentPage, deleteNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => setCurrentPage('edit', item)}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => deleteNote(item.id)} // Panggil fungsi deleteNote dengan id catatan
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default NoteCard;
