const express = require('express')
const { insertObject } = require('../databaseHandler')
const router = express.Router()

// use GCH0804-ApplicationDev

// db.students.drop()
// db.courses.drop()

// db.students.insertMany([
//     {studentId: 'GCH01', name: "Trang",age :24},
//     {studentId: 'GCH02',name: "Cuong",age :21}
//     ])
    

// db.courses.insertMany([
//     {courseId: '1670',courseName: 'Application Dev',slots: 40},
//      {courseId: '1644', courseName: 'Cloud computing',slots: 42},
//     ])

router.get('/',(req,res)=>{
    res.render('adminIndex')
})

router.post('/assignStudent',async (req,res)=>{
    const studentId = req.body.txtStudentId
    const courseId = req.body.txtCourseId
    const course_student = {
        studentId: studentId,
        courseId: courseId
    }
    await insertObject("CourseStudent",course_student)
    res.redirect('/admin')

})
router.get('/assignStudentToCourse',(req,res)=>{
    res.render('assignStudentToCourse')
})

router.get('/addUser',(req,res)=>{
    res.render('addUser')
})
//Submit add User
router.post('/addUser',(req,res)=>{
    const name = req.body.txtName
    const role = req.body.Role
    const pass= req.body.txtPassword
    const objectToInsert = {
        userName: name,
        role:role,
        password: pass
    }
    insertObject("Users",objectToInsert)
    res.render('adminIndex')
})


module.exports = router;

