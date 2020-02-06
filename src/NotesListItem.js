import React from 'react';

function NotesListItem({
    title,
    id,
    handleClick
}) {
    return (
        <li
            onClick={() => {
                console.log(`You clicked ${id}`);
                handleClick(id);
            }}
        >{title}</li>
    );
}

export default NotesListItem;