import image from "../images/images.png";



const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    
    return ( 
            <div className="item">
                <img className="user_image" src={image} alt="user" />
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="email">
                        {email}
                    </div>
                    <i className="icon">X</i>
                </div>
            </div>
     );
}
 
export default ContactCard;