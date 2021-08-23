import React, {useState, useEffect} from "react"
import Header from "../../components/Header"
import EmptyState from "../../assets/empty.png";
import "./Notes.scss"
import {Link, RouteComponentProps} from "react-router-dom"
import axios from 'axios';

type TParams = {
    journalId: string; 
}

interface Note {
    title: string;
    content: string;
    id: string;
}

function Notes({ match }: RouteComponentProps<TParams>) {

    const [notes, setNotes] = useState<Array<Note>>([]);

    const getNotes = () => {
        axios.get(`https://fuerza.test/journals/entries/${match.params.journalId}`)
        .then(function (response) {
            setNotes(response.data.entries)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        getNotes();
    }, [])

    return(
        <div className="notes">
            <Header />
            <div className="page-content">
                <div className="notes-list">
                    
                    {notes.length > 0 ? notes.map(note => (
                        <Link to={`/journal/${match.params.journalId}/note/${note.id}`} key={note.id}>
                            <div className="note-cover">
                                {note.title}
                            </div>
                        </Link>
                    )) : <img src={EmptyState} alt="No notes" />}

                </div>
                
                <Link className="new" to={`/journal/${match.params.journalId}/create-note`}>Create Note</Link>

            </div>
        </div>
    )
}

export default Notes;