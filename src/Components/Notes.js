import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Notes({ id, text, date, handleDeleteNote }) {
  return (
    <section className="bg-color2 p-3 min-h-[230px] max-w-[345px] rounded-xl flex flex-col justify-between whitespace-pre-wrap">
      <h3 className="wrap">{text}</h3>
      <footer className="flex flex-row justify-between items-center">
        <small>{date}</small>
        <MdDeleteForever
          className="cursor-pointer text-color4"
          size="1.2em"
          onClick={() => handleDeleteNote(id)}
        />
      </footer>
    </section>
  );
}

export default Notes;
