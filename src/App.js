import React, { useState, useEffect } from "react";
import NoteLists from "./Components/NoteLists";
import { nanoid } from "nanoid";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem("note-app-data"));

    if (savedNote) {
      setNotes(savedNote);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("note-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const addNewNote = [newNote, ...notes];
    setNotes(addNewNote);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  return (
    <div className={`${darkMode && "bg-dark"}`}>
      <div className="px-14 max-w-[980px] mx-auto min-h-screen">
        <Header darkMode={setDarkMode} darkModeValue={darkMode} />
        <SearchBar handleSearch={setSearchNote} />
        <NoteLists
          note={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchNote)
          )}
          handleNoteChange={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
