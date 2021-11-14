import ContactCard from "./ContactCard";


const ContactList = (props) => {

    console.log(props);
    
    const renderList = props.contacts.map((contact)=>{
        return( <ContactCard contacts={contact} /> )
    })
    return (   
        <div>
            {renderList}
        </div>
        
        
    );
}
 
export default ContactList;