const FakeData = require('../models/skill');

module.exports = {
    index,
    show
}
function index(req, res) {
    res.render('skills/index', {
        skills: FakeData.getAll(),
        title: "List of Students"
    })
}
function show(req, res) {
    console.log(`request is ${FakeData.getOne(req.params.id.student)}`);
    res.render('skills/show', {
        studentSkills: FakeData.getOne(req.params.id).skills,
        student: FakeData.getOne(req.params.id).student,
        title: `Skills of ${FakeData.getOne(req.params.id).student}`
    })
}