import React from "react";
import projectData from "../data/projects";


// The 'props' is the data coming from the page'ProjectCard', sa 'ProjectCard' naay property called 'project' which is equal to the 'projectData' from 'projects', so the property 'project' from 'Project' pages will now be equivalent to the parameter 'props' here. 

const ProjectCard = (props) => {

    console.log();
    
    return (

        <div className="text-center flex flex-col">
            <div className="project-1 lg:grid">
                <h1 className='text-md font-medium lg:text-2xl lg:font-semibold font-serif'>{props.project.name}</h1>
                    <p className='description xs:ml-2 flex flex-col font-serif p-3 lg:text-center lg:text-lg'>{props.project.description}</p>
                <div className='mt-1 drop-shadow-xl lg:mx-auto'>
                    <div className='relative md:mt-5'>
                    <a href='https://clentbacatan.github.io/webportfolio/'><img className='image w-[350px] hover:opacity-40 rounded-2xl lg:w-[50]' src={props.project.image} alt='/'/></a>
                    </div>
                <div className='group-click:block absolute top-[40%] left-[50%] translate-x-[-50%]'>
                <a href='/'><p className='bg-blue-200 border-solid rounded-full border hover:bg-orange-400 border-cyan-100 p-3'>View Here</p></a>
                </div>
             </div>   
            </div>
        </div>
      

     );
}
 
export default ProjectCard;

