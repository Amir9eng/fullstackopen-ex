import React, { useState } from "react";
import Axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("add a new note");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    if (!newNote.trim()) {
      alert("oogbadun ni , write something there jare");
      return;
    }

    setNotes(notes.concat(noteObject));
    setNewNote(" ");

    Axios.get("http://localhost:3003/notes").then((response) => {
      const notes = response.data;
      console.log(notes);
    });

    Axios.post("http://localhost:3003/notes", noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const handleNewNote = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  console.log(notes);
  console.log(notesToShow);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNewNote} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
