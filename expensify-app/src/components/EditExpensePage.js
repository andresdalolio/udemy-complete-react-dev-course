import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>Editing expense with id {props.match}</div>
    );
};

export default EditExpensePage;