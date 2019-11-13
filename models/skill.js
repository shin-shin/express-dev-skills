const fakeData = [
    {student: 'Dustin', skills: 'guitar'},
    {student: 'Irene', skills: 'dev skills'}
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