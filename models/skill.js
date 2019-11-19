const fakeData = [
    {
        student: 'Dustin', 
        skills: [
            {skill: "Fundamentals of HTML & CSS", acquired: true},
            {skill: "CSS: Flexbox", acquired: true},
            {skill: "Grid & Responsive Design", acquired: true},
            {skill: "DOM Manipulation & Events", acquired: true},
            {skill: "JS: Callback functions", acquired: true},
            {skill: "JS Classes", acquired: true},
            {skill: "jQuery", acquired: true},
            {skill: "NodeJS & ExpressJS Framework", acquired: true},
            {skill: "MongoDB & MongooseJS ODM", acquired: true},
            {skill: "Authentication using OAuth", acquired: false},
            {skill: "JS Promises", acquired: false},
            {skill: "Regular Expressions", acquired: false},
            {skill: "Project Deployment to Heroku", acquired:false}

        ]
    },
    {
        student: 'Irene', 
        skills: [
            {skill: "Fundamentals of HTML & CSS", acquired: true},
            {skill: "CSS: Flexbox", acquired: true},
            {skill: "Grid & Responsive Design", acquired: true},
            {skill: "DOM Manipulation & Events", acquired: true},
            {skill: "JS: Callback functions", acquired: true},
            {skill: "JS Classes", acquired: true},
            {skill: "jQuery", acquired: true},
            {skill: "NodeJS & ExpressJS Framework", acquired: true},
            {skill: "MongoDB & MongooseJS ODM", acquired: true},
            {skill: "Authentication using OAuth", acquired: false},
            {skill: "JS Promises", acquired: false},
            {skill: "Regular Expressions", acquired: false},
            {skill: "Project Deployment to Heroku", acquired:false}
        ]
    }
]

module.exports = {
    getAll, 
    getOne
}

function getAll(){
    return fakeData
}

function getOne(id){
    return fakeData[id]
}