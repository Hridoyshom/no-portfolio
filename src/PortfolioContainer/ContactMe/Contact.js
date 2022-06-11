import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
           <section id="contact" >
           <h1 class="headings">CONTACT</h1>
           <form action=" https://formsubmit.co/hshom827@gmail.com " method="POST" class="form"><input type="text" name="name" class="input" placeholder="Enter Your Name"></input>
           <input type="email" name="email" class="input" placeholder="Enter your email"></input>
           <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Enter Your Message"></textarea>
           <input type="submit" value="SEND" id="send"></input>
            
           </form>
            
            </section> 
        </div>
    );
};

export default Contact;