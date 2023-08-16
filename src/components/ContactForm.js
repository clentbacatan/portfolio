import { useState, useEffect } from "react";
import React from "react";
import swal from "sweetalert";



const formURL = 'https://getform.io/f/53a8a898-f938-4a29-ab3e-29cb2b8da59a'

const ContactForm = () => {


    const [email, setEmail] = useState('')
    const [active, setActive] = useState(true)

    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    
    
    function handleEmail(e) {
        
        const buttons =  document.getElementById('submit-button');

        const newEmail = e.target.value
        setEmail(newEmail);
        console.log(newEmail);
    
        if(pattern.test(newEmail)) {
            setActive(false);
            buttons.removeAttribute("type")
    
        } else if (newEmail === '') {
            setActive(true);
            buttons.setAttribute("type", "button")
         
        } else {
            setActive(true);
        }

        return newEmail;

    }
    
    function handleButton() {
        if(email === '') {
            swal({
                title: 'Oops!',
                text: 'Please enter your email address',
                icon: 'error',
            });
        } else if (pattern.test(email)) {
            swal({
                title: 'Yay!!',
                text: 'Thank you for your message',
                icon: 'success',
            });
        
        } else {
            swal({
                title: 'Oops!',
                text: 'Please enter a valid email address',
                icon: 'error',
            });
        }
               
        
    }

    // useEffect(() => {

    //     pattern.test(email)

    //     if (pattern.test(email)) {
    //         console.log(email)
    //         setActive(a => false);
    //         removeAttribute()
 
    //     } else if(email === '') {
    //         setActive(a => true);

    //     } else {
    //         setActive(a => true);
                   
        
    //     }
        
    // },[email]);
  

    return ( 

        <section>
            <div className='w-full h-screen lg:max-h-min flex justify-center items-center p-5'>
                <form method='POST' action={formURL} className='flex flex-col max-w-[600px] w-full drop-shadow-md '>
                    <div className='text-center py-3 drop-shadow-xl'>
                        <p className="lg:text-3xl text-lg font-medium">Contact Form</p>
                    </div>
                    <input className='m-2 p-3' type='text' placeholder='Enter Name' name='name'/>
                    <input className='m-2 p-3' 
                    type='email' 
                    placeholder='Enter Email' 
                    name='email'
                    value={email}
                    onChange={handleEmail}
                    
                    
                    />
                    <textarea className="m-2 p-3" placeholder='Your Message Here' name='message' cols='30' rows='10'/>

                     <button id="submit-button" type="button"
                     onClick={handleButton}
              
                     className={active ? 'submit-button border-2 rounded-full border-solid border-cyan-300 py-2 mt-4 font-semibold text-xl enabled:opacity-25' : 'submit-button border-2 rounded-full border-solid border-cyan-300 py-2 mt-4 font-semibold text-xl disabled:opacity-75'}
                     >Send</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;