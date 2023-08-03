const projectData = [
        
    {

        name: 'Capstone 1',
        image: 'images/project1.jpg',
        description: 'A responsive static web portfolio using HTML5, CSS3 and Bootstrap framework.',
        site: 'https://clentbacatan.github.io/webportfolio/',
        code: 'https://github.com/clentbacatan/webportfolio'
    },

    {
        name: 'Capstone 2',
        image: 'images/project2.jpg',
        description: 'Created an E-commerce backend API using Node.js and Express.js',
        code: 'https://gitlab.com/b253-bacatan/e-commerce-api'

    },

    {
        name: 'Capstone 3',
        image: 'images/project3.jpg',
        description: 'Functional E-commerce website using React with Bootstrap framework integrated with an API.',
        site: 'https://e-commerce-app-navy.vercel.app/',
        code: 'https://gitlab.com/b253-bacatan/fullstack'
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