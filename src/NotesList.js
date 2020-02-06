import React from 'react';
import NotesListItem from './NotesListItem';

function NotesList({
    notes,
    handleClick
}) {
    return (
        <ul>
            {
                notes.map(note => (
                    <NotesListItem 
                        title={note.title} 
                        id={note.id} 
                        key={note.id}
                        handleClick={handleClick}
                    />
                ))
            }            
        </ul>
    );
}

export default NotesList;