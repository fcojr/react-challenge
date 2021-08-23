import React from "react"
import "./App.scss"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Journals from "./pages/Journals/Journals"
import CreateJournal from "./pages/CreateJournal/CreateJournal"
import Notes from "./pages/Notes/Notes"
import CreateNote from "./pages/CreateNote/CreateNote"
import Note from "./pages/Note/Note"
import {BrowserRouter, Route, Redirect} from "react-router-dom"

function App(){

    return (
        <BrowserRouter>
            <div className="app">
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/journals" exact component={Journals}></Route>
                <Route path="/create-journal" component={CreateJournal}></Route>
                <Route path="/journal/:journalId/note/:noteId" exact component={Note}></Route>
                <Route path="/journal/:journalId/create-note" exact component={CreateNote}></Route>
                <Route path="/journal/:journalId" exact component={Notes}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App