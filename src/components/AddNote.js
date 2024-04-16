import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function AddNote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid pt-4 my-4 border border border-black border-opacity-25 rounded shadow-lg">
      <h2 className="text-center border-bottom border-opacity-25 pb-3">Add Notes</h2>
      <form className="my-3 ">
        <div className="mb-3">
          <label htmlFor="title" className="form-label mx-2">
            Title
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
            placeholder="must be 5 or more characters"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label mx-2">
            Description
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            id="description"
            name="description"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
            placeholder="must be 5 or more characters"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label mx-2">
            Tag
          </label>
          <input
            type="text"
            className="form-control shadow-sm"
            id="tag"
            name="tag"
            onChange={onChange}
            minLength={3}
            required
            value={note.tag}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-dark my-3 shadow-lg mx-3"
          onClick={handleClick}
          disabled={
            note.title.length < 5 ||
            note.description.length < 5
          }
        >
          <i className="fa-solid fa-plus"></i>  Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
