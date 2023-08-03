
const ContactForm = () => {
    return ( 
        <section>
            <div className='w-full h-screen lg:max-h-min flex justify-center items-center p-5'>
                <form method='POST' action='https://getform.io/f/53a8a898-f938-4a29-ab3e-29cb2b8da59a' className='flex flex-col max-w-[600px] w-full drop-shadow-md '>
                    <div className='text-center py-3 drop-shadow-xl'>
                        <p className="lg:text-3xl text-lg font-medium">Contact Form</p>
                    </div>
                    <input className='m-2 p-3' type='text' placeholder='Enter Name' name='name'/>
                    <input className='m-2 p-3' type='email' placeholder='Enter Email' name='email'/>
                    <textarea className="m-2 p-3" placeholder='Your Message Here' name='message' cols='30' rows='10'/>
                    <button className='submit-button border-2 rounded-full border-solid border-cyan-300 hover:bg-orange-400 py-2 mt-4 font-semibold text-xl '>Send</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;