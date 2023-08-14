import React from "react";

// The 'props' is the data coming from the page'ProjectCard', sa 'ProjectCard' naay property called 'project' which is equal to the 'projectData' from 'projects', so the property 'project' from 'Project' pages will now be equivalent to the parameter 'props' here. 


const ProjectCard = (props) => {

    return (
       <div className="card-parent">
            <div className="card-text text-center">
                <p className="prj-name text-md font-semibold lg:text-2xl lg:font-semibold font-serif">{props.project.name}</p>
                <div className="prj-container w-fit mx-auto mt-5">
                    <p className="prj-description">{props.project.description}</p>
                </div>
            </div>
            <div className="card-img">
                <div className="prj-image md:mt-5 drop-shadow-2xl">
                    <a href="/"><img src={props.project.image} className="" alt="/"/></a>
                </div>
            </div>
       </div>
    );
}
export default ProjectCard;

