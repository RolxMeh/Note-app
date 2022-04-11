import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

export default function NoteLists({
  note,
  handleNoteChange,
  handleDeleteNote,
}) {
  const nList = note.map((note) => (
    <Notes
      id={note.id}
      text={note.text}
      date={note.date}
      handleDeleteNote={handleDeleteNote}
    />
  ));
  return (
    <div className="mx-auto">
      <div className="pt-4 ml-1 font-inter grid grid-cols-1 gap-5 tablet:grid-cols-2 laptop:grid-cols-3">
        <AddNote handleNoteChange={handleNoteChange} />
        {nList}
      </div>
    </div>
  );
}
