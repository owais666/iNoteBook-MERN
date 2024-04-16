import React from "react";
import "../App.css";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

function Noteitem(props) {
  const { note, updateNote, showAlert } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <div className="col-md-3">
      {/* {note.title}
      {note.description} */}
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i
                className="fa-regular fa-trash-can mx-2"
                onClick={() => {
                  deleteNote(note._id);
                  showAlert("Deleted Successfully", "success");
                }}
              ></i>
              <i
                className="fa-regular fa-pen-to-square mx-2"
                onClick={() => {
                  updateNote(note);
                  
                }}
              ></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
          <p className="card-text fw-light text-end ">{note.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
