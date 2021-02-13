import React, { useEffect, useState } from "react";
import Axios from "axios";
import noteService from "./services/notes";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("add a new note");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => setNotes(initialNotes));
  }, []);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNotes) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNotes)));
      })
      .catch((error) => alert(`the note '${note.content}' was deleted`));
    setNotes(notes.filter((n) => n.id !== id));
  };

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
      alert("ogbeni , write something there jare");
      return;
    }

    // setNotes(notes.concat(noteObject));
    // setNewNote(" ");

    // Axios.get("http://localhost:3003/notes").then((response) => {
    //   const notes = response.data;
    //   console.log(notes);
    // });

    noteService.create(noteObject).then((returnedNotes) => {
      setNotes(notes.concat(returnedNotes));
      setNewNote("");
    });

    Axios.post("http://localhost:3002/api/notes", noteObject).then(
      (response) => {
        console.log(response, "success!");
        setNotes(notes.concat(response.data));
        setNewNote("");
      }
    );
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
        {notesToShow.map((note, i) => (
          <Note
            key={i}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
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
