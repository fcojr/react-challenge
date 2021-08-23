import React, {useState} from "react"
import Header from "../../components/Header"
import "./CreateJournal.scss"
import axios from 'axios';
import { useHistory } from "react-router-dom"

interface Journal {
    title: string;
    userId: string;
}

function CreateJournal() {

    const [journal, setJournal] = useState<Journal>({
        title: 'Título do Jornal',
        userId: '2'
    });

    let history = useHistory();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setJournal({...journal, title: value});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        axios.post('https://fuerza.test/journals/', journal)
        .then(function (response) {
            history.push('/journals');
        })
    }

    return (
        <div className="create-journal">
            <Header />
            <div className="page-content">
                <div className="journal-cover">
                    {journal.title}
                </div>
                <form action="#" onSubmit={handleSubmit}>
                    <input type="text" onChange={handleInputChange}  />
                    <button>Save Journal</button>
                </form>
            </div>
        </div>
    )
}

export default CreateJournal