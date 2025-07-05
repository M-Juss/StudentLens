import * as studentServices from '../services/studentService.js'

export const getStudents = async( req ,res ) => {
    try{
        const students = await studentServices.getStudents()
        res.status(200).json(students)
    } catch(err) {
        console.log('Error fetching students', err)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const createStudents = async( req ,res ) => {
    try{
        const studentDeets = req.body
        const newStudent = await studentServices.createStudents(studentDeets)
        res.status(200).json(newStudent)
    } catch(err) {
        console.log('Error fetching students', err)
        res.status(500).json({message: 'Internal server error'})
    }
}