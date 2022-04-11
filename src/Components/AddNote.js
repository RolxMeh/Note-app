import React, { useState } from "react";

export default function AddNote({ handleNoteChange }) {
  const [noteTextInput, setNoteTextInput] = useState("");

  const charLimit = 200;

  const handleTextInput = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteTextInput(event.target.value);
    }
  };

  const saveNote = () => {
    if (noteTextInput.trim().length > 0) {
      handleNoteChange(noteTextInput);
      setNoteTextInput("");
    }
  };

  return (
    <div className="bg-color1 p-3 min-h-[200px] max-w-[345px] rounded-xl flex flex-col justify-between">
      <textarea
        rows="7"
        cols="8"
        placeholder="Add new note..."
        className="bg-color1 border-0 outline-none resize-none"
        value={noteTextInput}
        onChange={handleTextInput}
      ></textarea>
      <div className="flex flex-row justify-between items-center">
        <small>{charLimit - noteTextInput.length} remaining</small>
        <button
          className="bg-color5 w-12 h-7 mt-2 rounded-xl"
          onClick={saveNote}
        >
          save
        </button>
      </div>
    </div>
  );
}
