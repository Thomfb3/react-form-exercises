import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./NewTodoForm.css"


function NewTodoForm({ createTodo }) {
    const [formData, setFormData] = useState({
        text: ""
    });


    const handleChange = evt => {
        const { name, value } = evt.target;

        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };


    const gatherInputs = evt => {
        evt.preventDefault();

        createTodo({ ...formData, id: uuidv4() });

        setFormData({
            text: ""
        });
    };


    return (
        <div>
            <form className="NewTodoForm" onSubmit={gatherInputs}>
                <div>
                    <label htmlFor="text">New Todo</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="text"
                        value={formData.text}
                        id="text"
                    />
                </div>
                <button className="NewTodoForm-button" id="newBoxBtn">Add Todo</button>
            </form>
        </div>
    );
};




export default NewTodoForm;