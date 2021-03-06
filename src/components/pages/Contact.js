import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers.js';


// contact page
function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInput = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);

        } else if (inputType === 'name') {
            setName(inputValue);

        } else if (inputType === 'note') {
            setNote(inputValue);

        }

    };

    const handleEmail = () => {

        if (!validateEmail(email)) {
            setErrorMessage('Email field is invalid or empty. This is a required field');
            return;
        }
    }
    const handleName = () => {

        if (!name) {
            setErrorMessage('This field is required');
            return;
        }
    }
    const handleNote = () => {

        if (!note) {
            setErrorMessage('This field is required');
            return;
        }
    }

    const clearMessage = () => {
        setErrorMessage('');
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail('');
        setName('');
        setNote('');

    }


    return (
        <div class="formDiv">
            <form name="form1">
                <div className="form-group" >
                    <div className="form-group">
                        <label >Name</label>
                        <input className="form-control" id="exampleInputPassword1" placeholder="Name" value={name} name="name" onChange={handleInput} onMouseOut={handleName} onMouseEnter={clearMessage} type="name"></input>
                    </div>

                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <div className="form-group">
                        <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type='email' name='email' value={email} onChange={handleInput} onMouseOut={handleEmail} onMouseEnter={clearMessage}></input>
                    </div>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Note</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={note} name="note" onChange={handleInput} onMouseOut={handleNote} onMouseEnter={clearMessage} type="note" placeholder="Note"></textarea>
                </div>


                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

            </form>

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}




export default Contact;