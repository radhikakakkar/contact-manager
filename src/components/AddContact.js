import { useState } from "react";
import React from 'react';
// import ReactDOM from 'react-dom';
// import props from 'prop-types';

const AddContact = (props) => {

    const [state, setState] = useState({
        name:  "",
        email: ""
    });
    const add=(e)=>{

        e.preventDefault();
        const name = document.getElementById('main-form').name.value;
        const email = document.getElementById('main-form').email.value;

        setState({name:name, email:email});
        // console.log(state);
    }

    console.log(state);
    props.addContactHandler(state);
    
    // function empty(e){
    //     e.preventDefault;
    //     setState({name:"", email:""}); //empty fields on submit
    // }
        

    return ( 
        <div>
            <form id="main-form" onSubmit={add}>
                <label htmlFor="name">Name: </label>
                <input 
                id="name" 
                type="text" 
                name="name"
                placeholder="Enter Your Name.." 
                
                // onChange={(e) => setState( {name:e.target.value}) }
                // value={state.name}
                required>

                </input>
                <br />
                <br />


                <label htmlFor="email">Email: </label>
                <input 
                id="email" 
                type="text" 
                name="email"
                placeholder="Enter Your Email.."  
                // onChange={(e) => setState( {email:e.target.value}) }
                // value={state.email}
                required>

                </input>
                <br />
                <br />
                <button className="add" type="submit">Add</button>

            </form>
        </div>
     );
}

export default AddContact;


