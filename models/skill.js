const fakeData = [
    {student: 'Dustin', skills: ['guitar', 'dev skills', 'bike skills']},
    {student: 'Irene', skills: ['dev skills', 'art', 'gardening']}
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