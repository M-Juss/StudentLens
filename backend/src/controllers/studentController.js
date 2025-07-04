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