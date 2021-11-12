import { useState } from "react";


// const AddContact = () => {


class AddContact extends React.Component{


    constructor(props) {

        super(props);
        this.state = {
            name:"",
            email:""
        }
        
    }
    // const [state, setState] = useState({
    //     name:  " ",
    //     email:  " "
    // });



    add=(e)=>{
        e.preventDefault();
        console.log(state);

    }

    render() {
    return ( 
        <div>
            <form onSubmit={add}>
                <label htmlFor="name">Name: </label>
                <input 
                id="name" 
                type="text" 
                name="name"
                placeholder="Enter Your Name.." 
                onChange={(e) => setState( {name:e.target.value}) }
                value={state.name}
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
                onChange={(e) => setState( {email:e.target.value}) }
                value={state.email}
                required>

                </input>
                <br />
                <br />
                <button className="add">Add</button>
            </form>
        </div>
     );
}
}
export default AddContact;


