const FakeData = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create: createSkill,
    delete: deleteSkill,
    update
}
function index(req, res) {
    console.log("index action");

    res.render('skills/index', {
        skills: FakeData.getAll(),
        title: "List of Students"
    })
}
function show(req, res) {
    console.log("show action");
    res.render('skills/show', {
        title: `Dev Skills of ${FakeData.getOne(req.params.id).student}`,
        studentId: req.params.id,
        student: FakeData.getOne(req.params.id).student,
        studentSkills: FakeData.getOne(req.params.id).skills,
    })
}
function newSkill(req, res) {
    console.log("newSkill action");
    res.render('skills/new', {
        title: `Add ${FakeData.getOne(req.params.id).student}'s New Skill`,
        studentId: req.params.id,
        student: FakeData.getOne(req.params.id).student,
    })
}

function createSkill(req, res) {
    if(req.body.skill) {
        let obj = FakeData.getOne(req.params.id)
        obj.skills.push({skill: req.body.skill, acquired: req.body.acquired})
        res.redirect(`/skills/${req.params.id}`)
    } else {
        res.redirect(`/skills/new/${req.params.id}`)
    }
}


function deleteSkill(req, res){
    let obj = FakeData.getOne(req.params.id)
    obj.skills.splice(req.params.idx, 1);
    res.redirect(`/skills/${req.params.id}`)
}

function update(req, res){
    
    res.redirect(`/skills/${req.params.id}`)
}