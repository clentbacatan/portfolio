const projectData = [
        
    {

        name: 'Capstone 1',
        image: 'images/project1.jpg',
        description: 'A responsive static web portfolio using HTML5, CSS3 and Bootstrap framework.'
    },

    {
        name: 'Capstone 2',
        image: 'images/project2.jpg',
        description: 'Create and structured an E-commerce backend API using Node and Express for the Backend.'

    },

    {
        name: 'Capstone 3',
        image: 'images/project3.jpg',
        description: 'Functional E-commerce website using React for the frontend and Express.js for the backend.'
    }
]; 


//this function is deconstructing an array of objects:

// const projectResult = projectData.reduce((acc, project) => {

// for(let property in project) {
//     if(!(property in acc)) {
//         acc[property] = [];
//     }
    
//     acc[property].push(project[property]);

// }

// return acc;

// }, {})


export default projectData;