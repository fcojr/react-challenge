import React from "react"
import Header from "../../components/Header"
import "./Note.scss"

interface Note {
    title: string;
    content: string;
}

function Note() {
    return (
        <div className="note">
            <Header />
            <div className="page-content">
                <div className="note-content">
                    
                    

                </div>

            </div>
        </div>
    )
}

export default Note