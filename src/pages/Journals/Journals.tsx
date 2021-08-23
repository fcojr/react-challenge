import React, {useState, useEffect} from "react"
import Header from "../../components/Header"
import EmptyState from "../../assets/empty.png";
import "./Journals.scss"
import {Link} from "react-router-dom"
import axios from 'axios';

interface Journal {
    title: string;
    id: string;
}

function Journals() {

    const [journals, setJournals] = useState<Array<Journal>>([]);

    const getJournals = () => {
        axios.get('https://fuerza.test/journals/2')
        .then(function (response) {
            setJournals(response.data.journals)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        getJournals();
    }, [])

    return (
        <div className="journals">
            <Header />
            <div className="page-content">
                <div className="journals-list">
                    
                    {journals.length > 0 ? journals.map(journal => (
                        <Link to={`/journal/${journal.id}`} key={journal.id}>
                            <div className="journal-cover">
                                {journal.title}
                            </div>
                        </Link>
                    )) : <img src={EmptyState} alt="No journals" />}

                </div>
                
                <Link className="new" to="/create-journal">Create Journal</Link>

            </div>
        </div>
    )
}

export default Journals