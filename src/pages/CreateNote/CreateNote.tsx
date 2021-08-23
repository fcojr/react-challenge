import React, {useState} from "react"
import Header from "../../components/Header"
import "./CreateNote.scss"
import axios from 'axios';
import { useHistory, RouteComponentProps } from "react-router-dom"

type TParams = {
    journalId: string; 
}


interface Note {
    title: string;
    content: string;
}

function CreateNote({ match }: RouteComponentProps<TParams>) {

    const [note, setNote] = useState<Note>({
        title: '',
        content: '',
    });

    let history = useHistory();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        setNote({...note, title: title});
    }

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const content = e.target.value;
        setNote({...note, content: content});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        axios.post(`https://fuerza.test/journals/entry/${match.params.journalId}/`, note)
        .then(function (response) {
            history.push(`/journal/${match.params.journalId}`);
        })

    }

    return (
        <div className="create-note">
            <Header />
            <div className="page-content">
                <form action="#" onSubmit={handleSubmit}>
                    <input placeholder="Title" name="title" type="text" onChange={handleInputChange} />
                    <textarea rows={20} placeholder="Write your note" name="text" onChange={handleTextareaChange} />
                    <button>Save Note</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNote