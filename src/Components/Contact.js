import "./Contact.css";

function Contact() {
    return (
        <div className="contact-form">
            <h2>CONTACT US</h2>
            <div className="form">
                <form>
                    <label className="first-name">
                        First Name:<br/>
                        <input type="text" name="first-name" id="first-name"/>
                    </label>
                    <label className="last-name">
                        Last Name:<br/>
                        <input type="text" name="last-name" id="last-name" />
                    </label><br/>
                    <label className="email">
                        Email:<br/>
                        <input type="text" name="email" id="email"/>
                    </label><br/>
                    <label className="message">
                        Message:<br/>
                        <textarea type="text" name="message" id="message"/>
                    </label><br/>
                    <input type="submit" value="Submit" id="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact;