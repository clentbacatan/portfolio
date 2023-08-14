
const About = () => {

    return(
        <section>
            <div id='about' className='text-sm w-[307px] lg:w-full mx-auto text-center lg:flex-cols justify-center md:mt-20 mt-12 lg:h-[650px]'>
                <h1 className='title text-center md:text-2xl text-xl lg:text-4xl font-medium'><span className='relative'>About Me</span></h1>
                <div className='md:flex md:flex-row-reverse md:max-w-[1350px] md:mt-10 md:mb-8 lg:px-14'>
                    <div className='mt-6 text-center md:w-[700px] flex md:items-center lg:text-lg tracking-normal font-serif'>
                        <p className='md:mx-8 md:pb-4 md:mb-8 md:text-md text-justify'>Hello and welcome to my site! I am thrilled to share a bit about myself with you. 
                        Originally a graduate of Electromechanical Technology, I embarked on an exciting journey that led me to shift my career path and become a self-taught web developer early  this year.                        
                        <p className='mt-4 text-justify'>It was during my time working as a freelance Virtual Assistant that I was introduced to the world of web development, and I instantly became captivated by the enchanting realm of <span className='text-orange-900 font-bold text-xl'>UI/UX Design</span>.</p>
                        <p className='mt-4'>Delving deep into the intricacies of web design, I honed my skills in <span className='text-orange-900 font-bold'>HTML5, CSS</span>, and <span className='text-orange-900 font-bold'>Javascript</span>, which laid a solid foundation for my creative endeavors. Additionally, I've had the pleasure of working with popular frameworks like Bootstrap and Tailwind, as well as the dynamic React library.
                        With an insatiable hunger for knowledge, I relish the opportunity to swiftly learn new programming languages and tech stacks. I thrive in the challenge of mastering cutting-edge technologies in record time.</p>
                        <p className='mt-4 text-justify'>Thank you for visiting. Feel free to reach out — I'm always eager to connect and collaborate!</p>
                        </p>
                    </div>
                    <div className='image pt-3 my-4 ml-5 flex justify-center md:ml-10 lg:mr-8 md:p-3 mr-3'>
                        <img className='h-58 w-48 md:w-56 md:h-3/4 lg:w-[290px] lg:h-[380px] rounded-b-2xl rounded-t-3xl drop-shadow-xl shadow-slate-500' src='images/about.png' alt='me'></img>
                    </div>
                </div>
            </div>
        </section>
    );

}
 
export default About;
