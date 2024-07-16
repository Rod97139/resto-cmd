import { useDispatch, useSelector } from "react-redux"
import { notesSelectors, notesSlice } from "./notesSlice"
import { nanoid } from "@reduxjs/toolkit"

const Notes = () => {
    const notes = useSelector(notesSelectors.selectAll)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const note = form.note?.value
        dispatch(notesSlice.actions.addNote({
            content: note,
            id: nanoid()
        }))
    }

    const handleRemove = (id) => {
        dispatch(notesSlice.actions.removeNote(id))
    }

  return (
    <div className="Notes">
      <h2>Notes pour la cuisine</h2>
      <form onSubmit={handleSubmit} >
        <label > Saisir une note
            <textarea name="note"></textarea>
        </label>
        <button type="submit" className="AddNote">Ajouter</button>
      </form>
      <ul className="NodeList">
        {
            notes && notes?.map((note) => (
                <li key={note.id} className="Note">
                    <p>{note.content}</p>
                    <button onClick={() => handleRemove(note.id)} className="RemoveNote">Supprimer</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Notes
