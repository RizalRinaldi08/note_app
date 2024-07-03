import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);
  

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    // console.log('ID:', id);

    setNoteList([
      ...noteList,
      {
        id,
        title,
        desc,
      },
    ]);
  };

  const updateNote = (id, title, desc) => {
    const updatedNotes = noteList.map((note) =>
      note.id === id ? { ...note, title, desc } : note
    );
    setNoteList(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = noteList.filter((note) => note.id !== id);
    setNoteList(updatedNotes);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      updateNote={updateNote}
      deleteNote={deleteNote}
    />
  );
};

const CurrentPageWidget = ({
  currentPage,
  setCurrentPage,
  noteList,
  addNote,
  updateNote,
  deleteNote,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} updateNote={updateNote} />;
    default:
      return <Home />;
  }
};

export default App;
