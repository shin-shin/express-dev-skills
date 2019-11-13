const FakeData = require('../models/skill');

module.exports = {
    index,
    show
}
function index(req, res) {
    res.render('skills/index', {
        skill: FakeData.getAll()
    })
}
function show(req, res) {
    res.render('skills/show', {
        skill: FakeData.getOne()
    })
}