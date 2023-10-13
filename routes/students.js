var express = require('express');
var router = express.Router();
const StudentModel = require('../models/Studentmodel');

router.get('/', async (req, res) => {

    var students = await StudentModel.find();
    res.render('students/index', {students: students});
})

    router.get('/detail/:id', async (req, res) => {
        var id = req.params.id;
        
        var student = await StudentModel.findById(id);
        res.render('students/detail', {student: student});
    })

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await StudentModel.findByIdAndDelete(id);
    console.log('Delete student sc');
    res.redirect('/students');
});

router.get('/add',  (req, res) => {
    res.render('students/add');
})

router.post('/add', async (req, res) => {
    var student = req.body;
    await StudentModel.create(student);
    console.log('Add Success!');
    res.redirect('/students')
});

router.get('/edit/:id', async (req, res) => {
    var id = req.params.id;
    var student = await StudentModel.findById(id);
    res.render('students/edit', {student: student})
});

router.get('/edit/:id', async (req, res) => {
var id = req.params.id;
var student = req.body;
await StudentModel.findByIdAndUpdate(id, student);
console.log('Edit Success!');
res.redirect('/students')
})


router.post('/search', async (req, res) => {
    var keyword = req.body.name;
    var students = await StudentModel.find({name: new RegExp (keyword, 'i')});
    res.render('students/index', {students: students});
})

router.get('/nameasc', async (req, res) => {
    var students = await StudentModel.find().sort({name: 1})
    res.render('students/index', {students: students});

})

router.get('/namedesc', async (req, res) => {
    var students = await StudentModel.find().sort({name: -1})
    res.render('students/index', {students: students});

})

module.exports = router;