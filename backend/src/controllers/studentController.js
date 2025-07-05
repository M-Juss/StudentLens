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

export const createStudent = async( req ,res ) => {
    try{
        const studentDeets = req.body
        const newStudent = await studentServices.createStudents(studentDeets)
        res.status(200).json(newStudent)
    } catch(err) {
        console.log('Error adding students', err)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const updateStudent = async( req ,res ) => {
    try{
        const studentDeets = req.body
        const studentId = req.params.id
        const updateStudent = await studentServices.updateStudent(studentDeets, studentId)
        if(!updateStudent) return res.status(404).json({message:`Failed to update student`})
        res.status(200).json(updateStudent)
    } catch(err) {
        console.log('Error updating students', err)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const deleteStudent = async( req ,res ) => {
    try{
        const studentId = req.params.id
        const deleteStudent = await studentServices.deleteStudent(studentId)
        if(!deleteStudent) return res.status(404).json({message:`Failed to update student`})
        res.status(200).send()
    } catch(err) {
        console.log('Error deleting students', err)
        res.status(500).json({message: 'Internal server error'})
    }
}

export const searchStudent = async( req ,res ) => {
    try{
        const searchKeyword = req.query.any
        const searchStudent = await studentServices.searchStudent(searchKeyword)
        if(!searchStudent) return res.status(404).json({message:`Failed to search student`})
        res.status(200).json(searchStudent)
    } catch(err) {
        console.log('Error deleting students', err)
        res.status(500).json({message: 'Internal server error'})
    }
}