import React from 'react';

function InstructionList(props) {
    const instructiontListItems = props.instructions.map((instruction, index) => {
        return (
            <li key={index}>
                {instruction.summary}
            </li>
        )
    });

    return (
        <ol>
            {instructiontListItems}
        </ol>
    )
}

export default InstructionList;